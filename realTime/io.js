const User = require('../module/user');
const Message = require('../module/message');
const async = require('async');
const jwt = require('jsonwebtoken');
const secret = process.env.secret;
const Tweet = require('../module/tweet');



module.exports =  io => {
    io.on('connection', socket => {



        // on event login
        // get token
        // sent decode
        // update user socketId and sent Updated user
        // get all users
        // ckeck if any user online (true , false)
        // sent updated user to thisUser (event login)
        // sent all users(online : true , false) to all users (event refresh)
        // if any error emit event error to thisUser
        socket.on('login' , token  =>  { 
            async.waterfall([
                
                // get token
                // sent decode
                cb => {
                    jwt.verify( token , secret , ( err , decode ) => {
                        cb( err , decode );
                    })
                },

                // get decode
                // update socketId
                // sent updated user
                ( decode , cb ) => {
                    User.findByIdAndUpdate({_id : decode.user._id} , {socketId : socket.id} ,  {new: true} , (err , user) => {
                        cb( err , user );
                    });
                },
                
                
                // get updated user
                // find all users
                // add online (true , false)
                // sent user and all users
                ( user , cb ) => {
                    User.find({})
                        .lean()
                        .exec( (err , users) => {
                            for(let i = 0 ; i < users.length ;  i++){
                                if(Object.keys(io.sockets.sockets).indexOf(users[i].socketId) > -1){
                                    users[i].online = true;
                                }else{
                                    users[i].online = false;
                                };
                            };
                            cb(err , user , users);
                    });
                }


                // if err sent eror to logout from app
            ] , (err , user , users) => { 
                if(err){
                    socket.emit('err' ,  {err : err , event : 'login'});
                }else{
                    // sent updated user to thisUser
                    socket.emit('login' ,  {user : user});

                    // sent all updated users to all users
                    io.emit('refresh' ,  {users : users });
                };
            });

        });


        
        // if any user disconnect
        // emit refresh event
        // sent all users(online: true , false) to all users
        // if any error  sent this error to thisUser
        socket.on('disconnect' , () => {  

            async.waterfall([
                
                // get all users
                // add online true or false
                cb => {
                    User.find({})
                        .lean() // this is very import to change Property in mongoose 
                        .exec((err , users) => {
                            for(let i = 0 ; i < users.length ;  i++){
                                if(Object.keys(io.sockets.sockets).indexOf(users[i].socketId) > -1){
                                    users[i].online = true;
                                }else{
                                    users[i].online = false;
                                };
                            };
                            cb(err , users);
                        });
                }

                // if err sent event error to logout thisUser
                // get all users with online(trur , false) and emit to all users
                ] , (err , users) => {
                    if(err){
                        // socket.emit('err' ,  {err : err , event : 'disconnect'});
                    }else{
                        io.emit('refresh' ,  { users : users });
                    };
                });
        })

        

        // on event msg
        // sent msg to caler.socketId
        // then save it in DB
        socket.on('msg' , msg => {
            async.parallel([
                
                // sent msg
                () => {
                    io.to(msg.caller.socketId).emit('msg' , msg);
                },

                // save msg 
                () => {
                    let message = new Message({
                        content : msg.content,
                        user : msg.user._id,
                        caller : msg.caller._id
                    });
                    message.save()
                        .then(() => {
                            // console.log('save msg')
                        })
                        .catch( err => {
                            ocket.emit('err' ,  {err : err , event : 'msg'});
                    })
                }
            ]);
        });


        // get new tweet from any user
        // emit this tweet to all anther users
        // save new tweet -> (relace user with user._id) to save userId in tweet DB 
        socket.on('tweet' , tweet => {
            async.parallel([
                () => {
                    // emit to all anther user
                    socket.broadcast.emit('tweet' , tweet);
                },
                () => {
                    // relace user with user_id
                    tweet.user = tweet.user._id;

                    // save new tweet
                    Tweet.create(tweet, (err , tweet) => {
                        if(err){
                            socket.emit('err' ,  {err : err , event : 'tweet'});
                        };
                    });
                }
            ]);
        });
  

        


    });
};





