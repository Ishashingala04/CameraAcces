import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const options ={
    "mediaType":"photo"
}
const Firstpage = () => {
    const [imgpath,setImgepath]=useState(null)
    const selectfile= async ()=>{
        const res = await launchImageLibrary(options);
        console.log(res);
        console.log(res.assets[0]);
        setImgepath(res.assets[0].uri)
    }

  return (
    <View>
      <Text>Firstpage</Text>
      <Button title='upload file' onPress={selectfile}></Button>
      <Image style={{height:200,width:200}} source={{uri:imgpath}}></Image>
    </View>
  )
}

export default Firstpage