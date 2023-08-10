// const FormInput: React.FC<{labelValue: string}> = () => {
//   return <TextInput style={styles.input} numberOfLines={1} placeholderTextColor="#666" />;
// };

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
const FormInput = ({labelValue, ...rest}) => {
  return <TextInput value={labelValue} style={styles.input} numberOfLines={1} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default FormInput;

// {"displayName": "김경휘", "email": "ppjs96616@gmail.com", "emailVerified": true, "isAnonymous": false, "metadata": {"creationTime": 1691394189280, "lastSignInTime": 1691394189281}, "multiFactor": {"enrolledFactors": [Array]}, "phoneNumber": null, "photoURL": "https://lh3.googleusercontent.com/a/AAcHTtcy1D4D6b2Tu6n18J5WaCi5jsVB94TacUheG264MiMd=s96-c", "providerData": [[Object]], "providerId": "firebase", "refreshToken": "AMf-vBxO_pIfsJWPlTFkqi8wpKgXvXJNHWCxT153TLn1sGqn5tjMEkiwv4hK9fWza5c-bJoLy2dBpTC_QzRxwmXWvtRP5clR_vn57Mc_c8ADtTAYntG33wgcUL5fZHaBXtLnoWOulYe6H8BEk5IeOdhpQ890Mga-dWBGiHUBt9HIxZknLaQ0nJSSGq6hd-QhTCb9inI5jpBdXV5mDPAV4T62oJ8umX8T-FPTq2tlIkhWuKRZMMprFYhobnYkI5nwiUgoNJY1WlO4Yz9ea6RK0pzkhKEI-F_4Jbxy5QVJXN7figdBpBqZwvHkjPLD0TqXI3W2Y7_pOcKHnAQc7A-cAsYHCPieHy9m4bFzoEXv_yVDe3C3oTuukicOIIsedqMrq-rMmz7bJAdS2mCZZLl743aCPPIwBmqSphE22ewmECdUFVcQycoYW1Y", "tenantId": null, "uid": "tfF9es5SnlTRMY06zTMRhpBcdav1"}

//     type asd = {
//    displayName: string,
//     metadata: {
//     creationTime: number,
//     lastSignInTime: number,
//   },
// asd: Array<{asd: string; ss: boolean}>

// [{asd: 'asd', ss: true}]
