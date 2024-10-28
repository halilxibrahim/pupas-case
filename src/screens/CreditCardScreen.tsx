import React from 'react';
import { View, Text, TouchableOpacity, ScrollView,ImageBackground,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  icon: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    merchant: 'LC Waikiki Mağazacılık H.',
    date: '30.03.2024',
    amount: -1304.43,
    icon: '👖'
  },
  {
    id: '2',
    merchant: "Happy Moon's Grup",
    date: '13.04.2024',
    amount: -310.00,
    icon: '🥤'
  },
];

export default function CreditCardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header */}
        <View className="flex-1 justify-center items-center pt-5 pb-10 m-4">
          <Text className="text-2xl font-semibold">Kartım</Text>
        </View>


      <View className="mx-4 h-36 pt-4 rounded-lg overflow-hidden">
        <LinearGradient
          colors={['#ffffff00', '#e3b1b1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <ImageBackground
          source={require('/Users/halil/Desktop/pupas-case/assets/card.png')}
          resizeMode="contain"
          className="h-full w-full"
        >
        </ImageBackground>
    </View>

        {/* Card Details */}
        {/* Action Buttons */}
        <View className="flex-row justify-between mx-4 mt-4">
        <TouchableOpacity className="flex-1 mr-2 bg-[#EF4A15] p-4 rounded-lg flex-row items-center justify-center">
          <Image
            source={require('/Users/halil/Desktop/pupas-case/assets/Payment_Qr.png')}
            className="w-6 h-6 mr-2"
          />
          <Text className="text-white text-center">QR ile öde</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 ml-2 bg-[#EF4A15] p-4 rounded-lg flex-row items-center justify-center">
          <Image
            source={require('/Users/halil/Desktop/pupas-case/assets/Money.png')}
            className="w-6 h-6 mr-2"
          />
          <Text className="text-white text-center">Para yükle</Text>
        </TouchableOpacity>

        </View>

        {/* Card Details */}
        <View className="mx-4 mt-6">
          <Text className="text-xl font-semibold mb-4">Kart bilgileri</Text>
          <View className="bg-gray-50 p-4 rounded-lg">
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600">4310 1030 3000 9530</Text>
              <Ionicons name="copy-outline" size={20} color="#666" />
            </View>
            <View className="flex-row mt-4">
              <View className="flex-row items-center">
                <Text className="text-gray-600">10/26</Text>
              </View>
              <View className="flex-row items-center ml-8">
                <Text className="text-gray-600">430</Text>
              </View>
              <Ionicons name="copy-outline" size={20} color="#666" style={{ marginLeft: 'auto' }} />
            </View>
          </View>
        </View>

        {/* Transactions */}
        <View className="mx-4 mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-semibold">Kart hareketleri</Text>
            <TouchableOpacity>
              <Text className="text-orange-500">Tümü</Text>
            </TouchableOpacity>
          </View>
          {transactions.map((transaction) => (
            <View key={transaction.id} className="flex-row items-center justify-between py-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <Text className="text-xl mr-3">{transaction.icon}</Text>
                <View>
                  <Text className="font-medium">{transaction.merchant}</Text>
                  <Text className="text-gray-500 text-sm">{transaction.date}</Text>
                </View>
              </View>
              <Text className="font-medium">{transaction.amount.toFixed(2)}₺</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around py-4 border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <Ionicons name="home-outline" size={24} color="#666" />
          <Text className="text-xs text-gray-500">Ana Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="card-outline" size={24} color="#E13916" />
          <Text className="text-xs text-[#E13916]">Kartlar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text className="text-xs text-gray-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}