import React from 'react';
import TextField from 'material-ui/TextField';
import Home from 'material-ui/svg-icons/action/home';
import Stars from 'material-ui/svg-icons/action/stars';
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Search from 'material-ui/svg-icons/action/search';

const container={ 
              height: 45,
              backgroundColor: 'white',
                width:'1348px',
                margin:'auto',
                position:'relative'
            
                
                };


const buttonlinks={
                  fontFamily:'Sans-serif',
                  fontWeight:'Bold',
                  marginTop:'4px',
                  display: 'inline-block',
                  textAlign:'center',
                  paddingTop:'25px',
                  height: '100%',
                  color:'#2196F3',
                  textDecoration:'none'
                  }
const tsearch={
             marginTop:'5px',
             marginBottom:'5px',
            border:'1px solid #2196F3',
            borderRadius:'25px',
            padding:'10px 10px 10px 10px',
            float:'right'
             }

const tweettext={   
fontWeight:'Bold'
}

export default class Navbar extends React.Component {
render() {
return (
         <Card zDepth={5}>
        <Toolbar style={container}>

        {/* Navigation Part of Toolbar Starts Here!!  */}

            <ToolbarGroup firstChild={true} style={{marginLeft:24}}>
                <IconButton tooltip="Home" className="floatingButton">
                  <Home color={blue500} />
                </IconButton>
                <a style={buttonlinks}>Home</a>
                <IconButton tooltip="Moments" className="floatingButton">
                            <Stars color={blue500} />
                </IconButton>
                <a style={buttonlinks}>Moments</a>
                <IconButton tooltip="Notifications" className="floatingButton">
                            <Notifications color={blue500} />
                </IconButton>
                <a style={buttonlinks}>Notifications</a>
                <IconButton tooltip="Messages" className="floatingButton">
                            <Messages color={blue500} />
                </IconButton>
                <a style={buttonlinks}>Messages</a>
                
            </ToolbarGroup>

        {/*Navigation Part of Toolbar Ends Here!! */}
        


             <ToolbarGroup>
                 <img src="./twitterlogo.jpg" alt="logo" style={{height:'25px',width:'25px', align:'center'}} />
             </ToolbarGroup>

             <ToolbarGroup style={tsearch}>
                <TextField hintText="Search Twitter"/>
                <Search style={{height:'30px',marginTop:'2px',cursor:'pointer'}}/>
                
             </ToolbarGroup>

             <ToolbarGroup>
                <Avatar src='./myavatar.jpeg' size={30} />
             
                <RaisedButton label="Tweet" labelStyle={tweettext} primary={true} />

             </ToolbarGroup>
            </Toolbar>
            </Card>
        );
    }
}