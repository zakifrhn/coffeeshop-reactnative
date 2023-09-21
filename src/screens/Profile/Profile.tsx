import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
const arrow = require('../../asset/chevron-left.png')
const Coffee = require('../../asset/Coffee.png')
import { AntDesign } from '@expo/vector-icons';
import useApi from '../../utils/useApi';
import axios from 'axios'
import { Platform } from 'react-native';

const Profile = ({ navigation }) => {
    const api = useApi()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [add, setadd] = useState('-')
    const [image_user, setimage_user] = useState('')

    function capital(text) {
        return text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord;
        });
    }

    const getDataUser = async () => {
        try {
            const { data } = await api({ method: 'get', url: `user` })
            // console.log(data.data[0])
            setname(capital(data.data[0].first_name + ' ' + data.data[0].first_name))
            setemail(data.data[0].email)
            setphone(data.data[0].phone)
            setadd('-')
            setimage_user(data.data[0].image)
            // dispatch(adddata(data.data))
        } catch (error) {
            if (error.response.data.status == 401) {
                // seterror_message(error.response.data.message)
                // btnlogout()
            }
            // seterror_message(error.response.data.message)
            console.log(error)
        }
    }

    useEffect(() => {
        getDataUser()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={arrow} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={styles.title}>
                        My Profile
                    </Text>
                </View>
                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 30,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Your Information
                    </Text>
                    <Text onPress={() => navigation.navigate('')} style={{ color: '#6A4029', fontWeight: '600' }}>
                        Edit
                    </Text>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, marginHorizontal: 30, height: 200, backgroundColor: 'white', borderRadius: 20 }}>
                    <Image source={{ uri: image_user }} style={{
                        width: 130,
                        height: 130,
                        borderRadius: 120,
                        alignSelf: 'center',
                    }} />
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginVertical: 4 }}>
                            {name}
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 18, color: '#6A4029' }}>
                            {email}
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 18, color: '#6A4029' }}>
                            {phone}
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 18, color: '#6A4029' }}>
                            {add}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginHorizontal: 30, height: 70, backgroundColor: 'white', borderRadius: 20 }}>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ margin: 20, fontSize: 18, fontWeight: 'bold' }}>
                            Order History
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ alignSelf: 'flex-end', margin: 20, fontSize: 18 }}>
                            <AntDesign name="right" size={20} color="black" />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginHorizontal: 30, height: 70, backgroundColor: 'white', borderRadius: 20 }}>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ margin: 20, fontSize: 18, fontWeight: 'bold' }}>
                            Edit Password
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ alignSelf: 'flex-end', margin: 20, fontSize: 18 }}>
                            <AntDesign name="right" size={20} color="black" />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginHorizontal: 30, height: 70, backgroundColor: 'white', borderRadius: 20 }}>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ margin: 20, fontSize: 18, fontWeight: 'bold' }}>
                            FAQ
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ alignSelf: 'flex-end', margin: 20, fontSize: 18 }}>
                            <AntDesign name="right" size={20} color="black" />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginHorizontal: 30, height: 70, backgroundColor: 'white', borderRadius: 20 }}>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ margin: 20, fontSize: 18, fontWeight: 'bold' }}>
                            Help
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', width: 180 }}>
                        <Text style={{ alignSelf: 'flex-end', margin: 20, fontSize: 18 }}>
                            <AntDesign name="right" size={20} color="black" />
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        marginTop: 20,
    },
    content_container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginHorizontal: 30,
    }
});

export default Profile;