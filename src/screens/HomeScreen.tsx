import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GLOBALS, TYPOGRAPHY } from '../shared/globals';
import { CategoriesList, ProductList, SearchInput } from '../components';

export const HomeScreen = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <SafeAreaView style={{ paddingTop:20 }}>
                <View style={{ ...GLOBALS.container, marginBottom: 20 }}>
                    <Text style={TYPOGRAPHY.title}>Bienvenido</Text>
                    <Text style={TYPOGRAPHY.sub_title}>Innova Code</Text>
                </View>
                <SearchInput />
                <CategoriesList />
                <ProductList />
            </SafeAreaView>
        </ScrollView>
    )
}
