import  React, {useState, useEffect} from 'react'
import { FontAwesome } from "@expo/vector-icons"
import {
    SafeareaView, 
    View,
     Text,
     TouchableOpacity,
     FlatList
    } from "react-native"

     import database from "../../config/firebaseconfig"
     import styles from "./style"

export default function Task({ navigation }){

    const [task, setTask] = useState([])

    useEffect(() => {
     database.collection("Task").onSnapshot((query) => {
        const list =[]
        query.forEach((doc) =>{
            list.push({...doc.data(), id: doc.id})
        })
        setTask(list)
     })
    }, [])

    return(
    <SafeView style={styles.container}>
        <FlatList/>
 </SafeView>
    )
}