import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
const arrow = require('../../asset/chevron-left.png')
const Cart = require('../../asset/shopping-cart.png')
const Coffee = require('../../asset/Coffee.png')

const ProductDetails = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={arrow} style={styles.icon} />
                </TouchableOpacity>
                <Image source={Cart} style={styles.icon} />
            </View>
            <View style={styles.contentContainer}>
                <Image source={Coffee} style={styles.content} />
                <Text style={styles.productName}>
                    Cold Brew
                </Text>
                <Text style={styles.price}>
                    IDR 30.000
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>
                    Delivery Info
                </Text>
                <Text>
                    Delivered only on Monday until Friday from 1 pm to 7 pm
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>
                    Description
                </Text>
                <Text style={styles.description}>
                    Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => console.log('add to cart keteken gblk')}>
                <Text style={styles.buttonText}>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
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
    contentContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    content: {
        width: 240,
        height: 240,
        borderRadius: 120,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    price: {
        fontSize: 18,
        color: "brown",
        fontWeight: "bold",
        marginTop: 5,
    },
    section: {
        marginTop: 20,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
    },
    button: {
        backgroundColor: 'brown',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        marginHorizontal: 25,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      
});

export default ProductDetails;
