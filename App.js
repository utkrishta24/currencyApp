import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, TextInput, } from 'react-native';

import Snackbar from "react-native-snackbar";

const currencyPerRupee = {
  DOLLAR: 0.0122,
  EURO: 0.0111,
  POUND: 0.0098,
  RUBEL: 0.969,
  AUSDOLLAR: 0.0182,
  CANDOLLAR: 0.0164,
  YEN: 1.61,
  YUAN: 0.0839,
  BITCOIN: 0.00004,
}

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPresssed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: "#ea7773",
        textColor: '#ffffff',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(4));
  }

  return (
    <>
      <ScrollView
        backgroundColor="#1b262c"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor='#c1c1c1'
              value={inputValue}
              onChangeText={(inputValue) => setInputValue(inputValue)}
            ></TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                onPress={() => buttonPresssed(currency)}
                key={currency}
                style={styles.converterButton}
              >
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultsContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
  },
  resultsValue: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#bbe1fa"
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: "#fff",
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: 'center',
    height: 100,
    width: "33.3%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#0f4c75",
  },
  convertButtonText: {
    color: "#fff",
    fontSize: 15,
  }
})