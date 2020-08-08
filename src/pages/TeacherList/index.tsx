import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import {Picker} from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';

import styles from './styles';

function TeacherList() {
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFiltersVisible);
    }

    return (
    <View style={styles.container}>
        <PageHeader 
            title="Proffys disponíveis" 
            headerRight={(
                <BorderlessButton onPress={handleToggleFilterVisible}>
                    <Feather name="filter" size={20} color="#fff" />
                </BorderlessButton>
            )}
        >
            { isFiltersVisible &&  (            
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bcc"
                        />
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual dia?"
                                placeholderTextColor="#c1bcc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual horário?"
                                placeholderTextColor="#c1bcc"
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
            )}
        </PageHeader>

        <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
        >
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </ScrollView>
    </View>
    )
}

export default TeacherList;
