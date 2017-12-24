import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import {blue500,red500} from 'material-ui/styles/colors';
import Comment from 'material-ui/svg-icons/communication/comment';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Cached from 'material-ui/svg-icons/action/cached';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';


const leftouter={
                 display:'inline-block',
                 marginTop:'20px',
                 marginLeft:'60px',
                 width:'300px',
                 cursor:'pointer',
                 float:'left',
                 position:'relative'
                 }

const middleouter={
                   display:'inline-block',
                   width:'600px',
                   marginTop:'20px',
                   marginLeft:'20px',
                   cursor:'pointer',
                   position:'relative',
                   float:'left'


                  }

const rightouter={
                  display:'inline-block',
                  width:'320px',
                  marginLeft:'20px',
                  marginTop:'20px',
                  position:'relative'
                  }


export default class Body extends React.Component {
render() {
return (  
	    <div>
         <div style={leftouter}>
             <Card id='userdetails' zDepth='3'>
          
              <CardHeader style={{backgroundColor:'#2196F3',height:'80px'}}>
              <Avatar src='./myavatar.jpeg' size={75} style={{marginTop:'25px', border:'3px solid white'}} />            
              </CardHeader>
              <CardTitle title="Sachin Singla" subtitle="@sachin_singla32" style={{fontWeight:'Bold', marginTop:'18px'}} />
          
             <CardTitle title="Tweets" subtitle="23" style={{float:'left'}} subtitleStyle={{color:'#2196F3',fontSize:'22px'}} titleStyle={{fontWeight:'Bold', fontSize:'16px', color:'grey' }}/>
             
             <CardTitle title="Following" subtitle="23" style={{float:'left'}} subtitleStyle={{color:'#2196F3',fontSize:'22px'}} titleStyle={{fontWeight:'Bold', fontSize:'16px', color:'grey' }}/>
             <CardTitle title="Followers" subtitle="23" subtitleStyle={{color:'#2196F3',fontSize:'22px'}} titleStyle={{fontWeight:'Bold', fontSize:'16px', color:'grey' }}/>
             
             </Card>
              <br/>              
              <Card zDepth='3'>
                 <CardTitle title="Trends For You" style={{fontFamily:'Sans-serif',fontWeight:'Bold'}}/>
                 <List>
                  <ListItem primaryText="#Jayalalitha" secondaryText="7942 tweets" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#AajSeTeri" secondaryText="5700 tweets" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#Swachh_Twitter_Abhiyan" secondaryText="4834 tweets" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#PradyumanMurderCase" secondaryText="1080 tweets" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#SlamDoorsNoMore" secondaryText="6542 tweets" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#TaimurAliKhan" secondaryText="2485 tweets" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#SonuKeTituKiSweetyTrailer" secondaryText="4582 tweets" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#Suriya36" secondaryText="1657 tweets" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>

               </List>
               </Card>
           </div>


           <div style={middleouter}>

            <Card style={{backgroundColor:'rgb(175, 217, 255)'}}>
            <Avatar src='./myavatar.jpeg' size={50} style={{marginTop:5,marginLeft:5,float:'left'}}/>
            <TextField hintText="What's happening?" underlineShow='false' hintStyle={{color:'#2196F3'}} style={{marginLeft:'20px',backgroundColor:'white',border:'2px solid white',borderRadius:'5px',marginTop:'10px',marginBottom:'10px',width:'500px',}}/> 
            </Card>
          

    <Card>
      <CardHeader title="ICC @ICC ·1m ago" titleStyle={{fontWeight:'Bold'}} subtitle="India take a 1-0 lead! Chahal leads the destruction as Sri Lanka are dismissed for just 87 in Cuttack, the hosts claiming victory in the 1st T20I by 93 runs #INDvSL " subtitleStyle={{fontWeight:'Bold'}} avatar="./icc.jpg"/>
      <CardMedia style={{marginLeft:'15px', marginRight:'20px'}}>
      <img src="./tweet1.jpg_large" alt="tweet1" style={{borderRadius:'5px'}} />
      </CardMedia>
       <IconButton tooltip="Comment" className="floatingButton">
         <Comment/>
       </IconButton>
       <IconButton tooltip="Retweet" className="floatingButton">
      <Cached  tooltip="Cached" />
      </IconButton>
       <IconButton tooltip="Like" className="floatingButton">
      <FavoriteBorder  tooltip="FavoriteBorder" color={red500} />
      </IconButton>
       <IconButton tooltip="Direct Message" className="floatingButton">
      <MailOutline/>
      </IconButton>
    
     
  </Card>
    <Card>
      <CardHeader title="BCCI @BCCI ·16m ago" titleStyle={{fontWeight:'Bold'}} subtitle="Sri Lanka have won the toss and will field first. Here's the playing XI for #TeamIndia #INDvSL" subtitleStyle={{fontWeight:'Bold'}} avatar="./bcci.jpg"/>
      <CardMedia style={{marginLeft:'15px', marginRight:'20px'}}>
      <img src="./tweet2.jpg_large" alt="tweet2" style={{borderRadius:'5px'}} />
      </CardMedia>
       <IconButton tooltip="Comment" className="floatingButton">
         <Comment/>
       </IconButton>
       <IconButton tooltip="Retweet" className="floatingButton">
      <Cached  tooltip="Cached" />
      </IconButton>
       <IconButton tooltip="Like" className="floatingButton">
      <FavoriteBorder  tooltip="FavoriteBorder" color={red500} />
      </IconButton>
       <IconButton tooltip="Direct Message" className="floatingButton">
      <MailOutline/>
      </IconButton>
    
     
  </Card>



<Card>
      <CardHeader title="PMO India @PMOIndia ·2h ago" titleStyle={{fontWeight:'Bold'}} subtitle="Captain of the Indian cricket team @imVkohli and noted actor @AnushkaSharma met PM @narendramodi this evening. The Prime Minister congratulated them on their wedding." subtitleStyle={{fontWeight:'Bold'}} avatar="./pmoindia.jpg"/>
      <CardMedia style={{marginLeft:'15px', marginRight:'20px'}}>
      <img src="./tweet3.jpg_large" alt="tweet1" style={{borderRadius:'5px'}} />
      </CardMedia>
       <IconButton tooltip="Comment" className="floatingButton">
         <Comment/>
       </IconButton>
       <IconButton tooltip="Retweet" className="floatingButton">
      <Cached  tooltip="Cached" />
      </IconButton>
       <IconButton tooltip="Like" className="floatingButton">
      <FavoriteBorder  tooltip="FavoriteBorder" color={red500} />
      </IconButton>
       <IconButton tooltip="Direct Message" className="floatingButton">
      <MailOutline/>
      </IconButton>
    
     
  </Card>
           </div>


           <div style={rightouter}>
          <Card>

          <CardTitle title='Who to follow' subtitle="·Refresh" subtitleStyle={{color:'#2196F3',marginTop:'15px',fontSize:'12px'}} titleStyle={{fontWeight:'Bold',float:'left'}}/>
          <List>
                 <ListItem primaryText="Kiku Sharda" secondaryText="@kikusharda" leftAvatar={<Avatar src="./kikusharda.jpg" />} />
                 <RaisedButton label="Follow" labelStyle={{fontWeight:'Bold'}} primary={true} style={{marginLeft:'70px', marginBottom:'15px'}}/>
                 <Divider/>
                 <ListItem primaryText="Ali Asgar" secondaryText="@kingaliasgar" leftAvatar={<Avatar src="./aliasgar.jpg" />}/>
                 <RaisedButton label="Follow" labelStyle={{fontWeight:'Bold'}} primary={true} style={{marginLeft:'70px', marginBottom:'15px'}}/>
                 <Divider/>
                 <ListItem primaryText="Sumona Chakravarti" secondaryText="@sumona24" leftAvatar={<Avatar src="./sumonachakravarti.jpg" />}/>
                 <RaisedButton label="Follow" labelStyle={{fontWeight:'Bold'}} primary={true} style={{marginLeft:'70px', marginBottom:'15px'}}/>
                 <Divider/>
                 <ListItem primaryText="Varun Dhawan" secondaryText="@varun_dvn" leftAvatar={<Avatar src="./varundhawan.jpg" />}/>
                 <RaisedButton label="Follow" labelStyle={{fontWeight:'Bold'}} primary={true} style={{marginLeft:'70px', marginBottom:'15px'}}/>
      
           </List>

           </Card>

           <br/>

           <Card>
           <CardText>
           © 2017 Twitter <a style={{color:'#2196F3',margin:5}}>About</a> <a style={{color:'#2196F3',margin:5}}>Help Center</a> <a style={{color:'#2196F3',margin:5}}>Terms</a> <a style={{color:'#2196F3',margin:5}}>Privacy policy</a> <a style={{color:'#2196F3',margin:5}}>Cookies</a> <a style={{color:'#2196F3',margin:5}}>Ads info</a> <a style={{color:'#2196F3',margin:5}}>Brand</a> <a style={{color:'#2196F3',margin:5}}>Blog</a> <a style={{color:'#2196F3',margin:5}}>Status</a> <a style={{color:'#2196F3',margin:5}}>Apps</a> <a style={{color:'#2196F3',margin:5}}>Jobs</a> <a style={{color:'#2196F3',margin:5}}>Marketing</a> <a style={{color:'#2196F3',margin:5}}>Businesses</a> <a style={{color:'#2196F3',margin:5}}>Developers</a>
           <Divider style={{marginTop:'10px'}}/>
           <OpenInNew color={blue500} style={{float:'left'}}/><a style={{color:'#2196F3',margin:5}}>Advertise With Twitter</a>
           </CardText>
           </Card>
           </div>
           </div>






       );
    }
}