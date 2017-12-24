import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {blue500,red500} from 'material-ui/styles/colors';
import Comment from 'material-ui/svg-icons/communication/comment';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Cached from 'material-ui/svg-icons/action/cached';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const leftouter={
                 display:'inline-block',
                 marginTop:'75px',
                 marginLeft:'60px',
                 width:'300px',
                 float:'left',
                 position:'relative'
                 }

const middleouter={
                   display:'inline-block',
                   width:'600px',
                   marginTop:'75px',
                   marginLeft:'20px',
                   cursor:'pointer',
                   position:'relative',
                   float:'left'


                  }


const rightouter={
                  display:'inline-block',
                  width:'320px',
                  marginLeft:'20px',
                  marginTop:'75px',
                  position:'relative'
                  }

const upperbody={
                 height: 65,
                width:'1348px',
                position:'relative',
                backgroundColor:'white'  
                 }

const links={
                  fontFamily:'Sans-serif',
                  fontWeight:'Bold',
                  marginTop:'25px',
                  display: 'inline-block',
                  textAlign:'center',
                  paddingTop:'25px',
                  height: '100%',
                  color:'#2196F3',
                  marginRight:'15px'
                  }

export default class Body extends React.Component {
render() {
return (  
	    <div>
      <div style={upperbody}>
      
      <Card style={{backgroundColor:'#2196F3'}}>
      <CardTitle title="aadhaar" titleStyle={{fontWeight:900,color:'white',marginLeft:'45px'}}/>
      </Card>

      <Card>
      <Toolbar>

        {/* Navigation Part of Toolbar Starts Here!!  */}

            <ToolbarGroup firstChild={true} style={{marginLeft:35}}>
                
                <a style={links}>Top</a>
                
                <a style={links}>Latest</a>
                
                <a style={links}>People</a>
               
                <a style={links}>Photos</a>

                <a style={links}>Videos</a>

                <a style={links}>News</a>

                <a style={links}>Broadcasts</a>
                
            </ToolbarGroup>
            
            <ToolbarGroup>
            <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} anchorOrigin={{horizontal: 'right', vertical: 'top'}} targetOrigin={{horizontal: 'right', vertical: 'top'}}>
              <MenuItem primaryText="Search Settings"/>
              <Divider/>
              <MenuItem primaryText="Save This Search" />
              <MenuItem primaryText="Embed This Search" />
            </IconMenu>

            </ToolbarGroup>
      
      </Toolbar>

      </Card>
      </div>
         <div style={leftouter}>
         <Card zDepth='3'>
                 <CardTitle title="Search Filters" style={{fontFamily:'Sans-serif',fontWeight:'Bold'}}/>
            </Card>
            <br/>
               <Card zDepth='3'>
                 <CardTitle title="Related Searches" style={{fontFamily:'Sans-serif',fontWeight:'Bold'}}/>
                 <List>
                  <ListItem primaryText="pv sindhu" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#soniagandhi" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#rajasthan" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="#amarnath" hoverColor="rgb(225, 228, 0)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  <ListItem primaryText="jbl and sunburn" hoverColor="rgb(83, 220, 71)" style={{color:'#2196F3',fontWeight:'Bold'}}/>
                  </List>
               </Card>
               <br/>
 
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
               <br/>

           <Card>
           <CardText>
           © 2017 Twitter <a style={{color:'#2196F3',margin:5}}>About</a> <a style={{color:'#2196F3',margin:5}}>Help Center</a> <a style={{color:'#2196F3',margin:5}}>Terms</a> <a style={{color:'#2196F3',margin:5}}>Privacy policy</a> <a style={{color:'#2196F3',margin:5}}>Cookies</a> <a style={{color:'#2196F3',margin:5}}>Ads info</a> <a style={{color:'#2196F3',margin:5}}>Brand</a> <a style={{color:'#2196F3',margin:5}}>Blog</a> <a style={{color:'#2196F3',margin:5}}>Status</a> <a style={{color:'#2196F3',margin:5}}>Apps</a> <a style={{color:'#2196F3',margin:5}}>Jobs</a> <a style={{color:'#2196F3',margin:5}}>Marketing</a> <a style={{color:'#2196F3',margin:5}}>Businesses</a> <a style={{color:'#2196F3',margin:5}}>Developers</a>
           <Divider style={{marginTop:'10px'}}/>
           <OpenInNew color={blue500} style={{float:'left'}}/><a style={{color:'#2196F3',margin:5}}>Advertise With Twitter</a>
           </CardText>
           </Card>
           </div>


           <div style={middleouter}>

            <Card zDepth='0'>
            <CardHeader title="Top News" titleStyle={{fontWeight:'Bold',color:'white',fontSize:24}} style={{backgroundColor:'rgb(60,60,60)'}}/>
            <CardMedia>
            <img src='./topnews.jpg'/>
            </CardMedia>
             <CardTitle title="Open to improvements in Aadhaar-based privacy framework: Jaitley - Times of India" titleStyle={{fontWeight:'Bold'}}/> 
            <CardText>
            India News: Union finance minister Arun Jaitley on Saturday said the government will remain open to suggestions for improving the privacy framework surrounding... 

            </CardText>

            </Card>

            <br/>

            <Card zDepth='0'>
            <CardHeader title="People" titleStyle={{fontWeight:'Bold',color:'white',fontSize:24}} style={{backgroundColor:'rgb(60,60,60)'}}/>

            </Card>

             <Card style={{width:'280px'}} zDepth='3'>
          
              <CardHeader style={{backgroundColor:'#2196F3',height:'80px'}}>
              <Avatar src='./aadhaar.jpg' size={75} style={{marginTop:'25px', border:'3px solid white'}} />            
              </CardHeader>
              <CardTitle title="Aadhaar" subtitle="@UIDAI" style={{fontWeight:'Bold', marginTop:'18px'}} />
              <RaisedButton label="Follow" labelStyle={{fontWeight:'Bold'}} primary={true} style={{marginLeft:'15px'}}/>

              <CardText>
              Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.
              </CardText>
             </Card>
             <br/>
             <br/>
          

    <Card>
      <CardHeader title="Sir ravindra Jadeja @SirJadeja ·4h ago" titleStyle={{fontWeight:'Bold',marginBottom:'10px'}} subtitle="If No One Is Guilty And There Was No Scam Why Did Supreme Court Cancel 122 Telecom Licences Issued In January 2008 By Then Telecom Minister #ARaja? Who IS Responsible? No One Looted Rs 1760000000000? RIP Judiciary. #2GSpectrum #2GScamVerdict #ARaja " subtitleStyle={{fontWeight:'Bold'}} avatar="./sirravindrajadeja.jpg"/>
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
      <CardHeader title="Atul Khatri @one_by_two ·21h ago" titleStyle={{fontWeight:'Bold',marginBottom:'10px'}} subtitle="#Virushka submitting their Aadhaar card & KYC forms to Modiji directly." subtitleStyle={{fontWeight:'Bold'}} avatar="./atulkhatri.jpeg"/>
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
      <CardHeader title="Rohin Dharmakumar @r0h1n ·Dec 19 " titleStyle={{fontWeight:'Bold',marginBottom:'10px'}} subtitle="This govt. wants to make Aadhaar compulsory for almost everything you can think of. Except:
- political donations
- real estate 
Wonder why ? " subtitleStyle={{fontWeight:'Bold'}} avatar="./rohindharmakumar.jpg"/>
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

          <CardTitle title='Related Searches' subtitle="·View All" subtitleStyle={{color:'#2196F3',marginTop:'15px',fontSize:'12px'}} titleStyle={{fontWeight:'Bold',float:'left'}}/>
          <CardText>
          <h4>At IIT Festival, Narayana Murthy, P Chidambaram Spar Over Aadhaar…</h4>
          Chidamabaram said the "government is completely deaf" to any reasoning against…
          <br/>
          <br/>
          <Divider/>
          <h4>P. Chidambaram, Narayana Murthy spar over Aadhaar</h4>
          P. Chidambaram flags concerns on mandatory Aadhaar linking, Infosys co-founder N.R.…
          </CardText>

           </Card>

           <br/>

          
           </div>

          
           

           </div>






       );
    }
}