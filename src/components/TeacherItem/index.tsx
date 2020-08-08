import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'http://www.google.com.br' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcelo</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                {'\n'}  {'\n'}
                Aperiam modi dolorem ad cupiditate aut consequatur expedita dolore maxime ea earum!
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    <Image source={heartOutlineIcon} />
                    <Image source={unfavoriteIcon} />
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default TeacherItem;