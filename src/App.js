import {useEffect, useState} from 'react'
import './App.css';
import axios from "axios"

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setCunvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect (() => {
    const getExchangeRate = async () => {
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        //console.log(response);
        setExchangeRate(response.data.rates[toCurrency])
      } catch (error) {
        console.error("Error fetching exchange rate:" , error)
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setCunvertedAmount((amount * exchangeRate).toFixed(2))
    }
  },[amount, exchangeRate])

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value)
  };

  const handleFromCrurrencyChange = (e) => {
    setFromCurrency(e.target.value)
  };

  const handleToCrurrencyChange = (e) => {
    setToCurrency(e.target.value)
  }; 
  return (
 <>
  <div className='currency-cunverter'>
    <div className='imgbox'>
     <img className='box' src='https://tse3.mm.bing.net/th?id=OIP.9o0v0ylWteXXViF_V_gtVwHaHa&pid=Api&P=0&h=180' alt=''/>
    </div>
     
  <div className='data'>
    <h1>Currency Cunverter</h1>
    <div className='input-container'>
      <label htmlFor='amt'>Amount :</label>
      <input type='number' value={amount} id='amt' onChange={handleAmountChange}/>
    </div>

<div className='input-container'>
<label htmlFor='fromCurrency' >From Currency :</label>
<select id='fromCurrency' value={fromCurrency} onChange={handleFromCrurrencyChange}> 

<option value="USD">USD - United State Dollar</option>
<option value="AED">AED - United Arab Emirates Dirham</option>
<option value="AFN">AFN - Afghanistan Afghani</option>
<option value="ALL">ALL - Albania Lek</option>
<option value="AMD">AMD - Armenia Dram</option>
<option value="ANG">ANG - Dutch Guilder</option>
<option value="AOA">AOA - Angola Kwanza</option>
<option value="ARS">ARS - Argentina Peso</option>
<option value="AUD">AUD - Australia Dollar</option>
<option value="AWG">AWG - Aruba Florin</option>
<option value="AZN">AZN - Azerbaijan New Manat</option>
<option value="BAM">BAM - Bosnia Mark</option>
<option value="BBD">BBD - Barbados Dollar</option>
<option value="BDT">BDT - Bangladesh Taka</option>
<option value="BGN">BGN - Bulgaria Lev</option>
<option value="BHD">BHD - Bahrain Dinar</option>
<option value="BIF">BIF - Burundi Franc</option>
<option value="BMD">BMD - Bermudian dollar</option>
<option value="BND">BND - Brunei Dollar</option>
<option value="BOB">BOB - Bolivia Boliviano</option>
<option value="BRL">BRL - Brazil Real</option>
<option value="BSD">BSD - Bahamas Dollar</option>
<option value="BTN">BTN - Bhutan Ngultrum</option>
<option value="BWP">BWP - Botswana Pula</option>
<option value="BYN">BYN - Belarusian ruble</option>
<option value="BZD">BZD - Belize Dollar</option>
<option value="CAD">CAD - Canada Dollar</option>
<option value="CDF">CDF - Congolese Francs </option>
<option value="CHF">CHF - Swiss Francs</option>
<option value="CLP">CLP - Chilean Pesos</option>
<option value="CNY">CNY - Chinese Yuan</option>
<option value="COP">COP - Colombia Peso</option>
<option value="CRC">CRC - Costa Rican Colones</option>
<option value="CUP">CUP - Cuban Pesos</option>
<option value="CVE">CVE - Cape Verdean Escudos</option>
<option value="CZK">CZK - Czech Koruny</option>
<option value="DJF">DJF - Djibouti Franc</option>
<option value="DKK">DKK - Denmark Krone</option>
<option value="DOP">DOP - Dominican Republich Peso</option>
<option value="DZD">DZD - Algerian Dinars</option>
<option value="EGP">EGP - Egypt Pound</option>
<option value="ERN">ERN - Eritrean Nakfas</option>
<option value="ETB">ETB - Ethiopian Birrs</option>
<option value="EUR">EUR - Euros</option>
<option value="FJD">FJD - Fijian Dollars</option>
<option value="FKP">FKP - Falkland Island Pounds</option>
<option value="FOK">FOK - Faroese Krona</option>
<option value="GBP">GBP - British Pounds</option>
<option value="GEL">GEL - Georgia Lari</option>
<option value="GGP">GGP - Guernsey Pounds</option>
<option value="GHS">GHS - Ghana New Cedi</option>
<option value="GIP">GIP - Gibraltar Pound</option>
<option value="GMD">GMD - Gambia Dalasi</option>
<option value="GNF">GNF - Guinea Franc</option>
<option value="GTQ">GTQ - Guatemala Quetzal</option>
<option value="GYD">GYD - Guyana Dollar</option>
<option value="HKD">HKD - Hong Kong Dollar</option>
<option value="HRK">HRK - Croatian Kuna</option>
<option value="HNL">HNL - Honduras Lempira</option>
<option value="HTG">HTG - Haitian Gourdes</option>
<option value="HUF">HUF - Hungarian Forints</option>
<option value="IDR">IDR - Indonesia Rupiah</option>
<option value="ILS">ILS - Israel New Shekel</option>
<option value="IMP">IMP - Isle of Man Pounds</option>
<option value="INR">INR - India Rupee</option>
<option value="IQD">IQD - Iraq Dinar</option>
<option value="IRR">IRR - Iranian Rials</option>
<option value="ISK">ISK - Icelandic Kronur</option>
<option value="JEP">JEP - Jersey Pounds</option>
<option value="JMD">JMD - Jamaica Dollar</option>
<option value="JOD">JOD - Jordan Dinar</option>
<option value="JPY">JPY - Japan Yen</option>
<option value="KES">KES - Kenya Shilling</option>
<option value="KGS">KGS - Kyrgyzstan Som</option>
<option value="KHR">KHR - Cambodian Riels</option>
<option value="KMF">KMF - Comorian Francs</option>
<option value="KRW">KRW - South Korean Won</option>
<option value="KWD">KWD - Kuwaiti Dinars</option>
<option value="KYD">KYD - Caymanian Dollar</option>
<option value="KZT">KZT - Kazakhstani Tenge</option>
<option value="KID">KID - Kiribati Dollar</option>
<option value="LAK">LAK - Laos Kip</option>
<option value="LBP">LBP - Lebanon Pound</option>
<option value="LKR">LKR - Sri Lankan Rupee</option>
<option value="LRD">LRD - Liberia Dollar</option>
<option value="LSL">LSL - Lesotho Loti</option>
<option value="LYD">LYD - Libya Dinar</option>
<option value="MAD">MAD - Morocco Dirham</option>
<option value="MDL">MDL - Moldova Leu</option>
<option value="MGA">MGA - Malagasy Ariary</option>
<option value="MKD">MKD - Macedonia Denar</option>
<option value="MMK">MMK - Malawi Kwacha</option>
<option value="MNT">MNT - Mongolia Tugrik</option>
<option value="MOP">MOP - Macau Pataca</option>
<option value="MRU">MRU - Mauritanian Ouguiyas</option>
<option value="MUR">MUR - Mauritius Rupee</option>
<option value="MVR">MVR - Maldives Rufiyaa</option>
<option value="MWK">MWK - Malawi Kwacha</option>
<option value="MXN">MXN - Mexico Peso</option>
<option value="MYR">MYR - Malaysia Ringgit</option>
<option value="MZN">MZN - Mozambique New Metical</option>
<option value="NAD">NAD - Namibia Dollar</option>
<option value="NGN">NGN - Nigeria Naira</option>
<option value="NIO">NIO - Nicaragua Cordoba Oro</option>
<option value="NOK">NOK - Norway Kroner</option>
<option value="NPR">NPR - Nepal Rupee</option>
<option value="NZD">NZD - New Zealand Dollar</option>
<option value="OMR">OMR - Oman Rial</option>
<option value="PAB">PAB - Panama Balboa</option>
<option value="PEN">PEN - Peru Nuevo Sol</option>
<option value="PGK">PGK - Papua New Guinea Kina</option>
<option value="PHP">PHP - Philippines Peso</option>
<option value="PKR">PKR - Pakistan Rupee</option>
<option value="PLN">PLN - Poland Zloty</option>
<option value="PYG">PYG - Paraguay Guarani</option>
<option value="QAR">QAR - Qatar Rial</option>
<option value="RON">RON - Romania New Lei</option>
<option value="RSD">RSD - Serbia Dinar</option>
<option value="RUB">RUB - Russia Rouble</option>
<option value="RWF">RWF - Rwanda Franc</option>
<option value="SAR">SAR - Saudi Arabia Riyal</option>
<option value="SBD">SBD - Solomon Islands Dollar</option>
<option value="SCR">SCR - Seychelles Rupee</option>
<option value="SDG">SDG - Sudan Pound</option>
<option value="SEK">SEK - Sweden Krona</option>
<option value="SGD">SGD - Singapore Dollar</option>
<option value="SHP">SHP - St Helena Pound</option>
<option value="SLE">SLE - Isle of Man Pounds</option>
<option value="SLL">SLL - Sierra Leone Leone</option>
<option value="SOS">SOS - Somali Shilling</option>
<option value="SRD">SRD - Suriname Dollar</option>
<option value="STN">STN - Sao Tomean Dobras</option>
<option value="SYP">SYP - Syrian Pounds</option>
<option value="SZL">SZL - Swazi Emalangeni</option>
<option value="SSP">SSP - South Sudsnese p</option>
<option value="THB">THB - Thailand Baht</option>
<option value="TJS">TJS - Tajikistani Somoni</option>
<option value="TMT">TMT - Turkmenistani Manats</option>
<option value="TND">TND - Tunisia Dinar</option>
<option value="TOP">TOP - Tonga Pa'anga</option>
<option value="TRY">TRY - Turkish New Lira</option>
<option value="TTD">TTD - Trinidad/Tobago Dollar</option>
<option value="TVD">TVD - Tuvaluan Dollars</option>
<option value="TWD">TWD - Taiwan Dollar</option>
<option value="TZS">TZS - Tanzania Shilling</option>
<option value="UAH">UAH - Ukraine Hryvnia</option>
<option value="UGX">UGX - Uganda Shilling</option>
<option value="UYU">UYU - Uruguay Peso</option>
<option value="UZS">UZS - Uzbekistani Sums</option>
<option value="VES">VES - Venezuelan Bolívares</option>
<option value="VND">VND - Vietnam Dong</option>
<option value="VUV">VUV - Vanuatu Vatu</option>
<option value="WST">WST - Samoan Tala</option>
<option value="XAF">XAF - Central African Francs</option>
<option value="XCD">XCD - East Caribbean Dollars</option>
<option value="XDR">XDR - IMF Special Drawing Rights</option>
<option value="XOF">XOF - Convert CFA Francs</option>
<option value="XPF">XPF - CFP Francs</option>
<option value="YER">YER - Yemen Rial</option>
<option value="ZAR">ZAR - South African Rand</option>
<option value="ZMW">ZMW - Zambian Kwacha</option>
<option value="ZWL">ZWL - Zimbabwean Dollars</option>

</select>
</div>

<div className='input-container'>
<label htmlFor='toCurrency' >To Currency :</label>
<select id='toCurrency' value={toCurrency} onChange={handleToCrurrencyChange}> 

<option value="USD">USD - United State Dollar</option>
<option value="AED">AED - United Arab Emirates Dirham</option>
<option value="AFN">AFN - Afghanistan Afghani</option>
<option value="ALL">ALL - Albania Lek</option>
<option value="AMD">AMD - Armenia Dram</option>
<option value="ANG">ANG - Dutch Guilder</option>
<option value="AOA">AOA - Angola Kwanza</option>
<option value="ARS">ARS - Argentina Peso</option>
<option value="AUD">AUD - Australia Dollar</option>
<option value="AWG">AWG - Aruba Florin</option>
<option value="AZN">AZN - Azerbaijan New Manat</option>
<option value="BAM">BAM - Bosnia Mark</option>
<option value="BBD">BBD - Barbados Dollar</option>
<option value="BDT">BDT - Bangladesh Taka</option>
<option value="BGN">BGN - Bulgaria Lev</option>
<option value="BHD">BHD - Bahrain Dinar</option>
<option value="BIF">BIF - Burundi Franc</option>
<option value="BMD">BMD - Bermudian dollar</option>
<option value="BND">BND - Brunei Dollar</option>
<option value="BOB">BOB - Bolivia Boliviano</option>
<option value="BRL">BRL - Brazil Real</option>
<option value="BSD">BSD - Bahamas Dollar</option>
<option value="BTN">BTN - Bhutan Ngultrum</option>
<option value="BWP">BWP - Botswana Pula</option>
<option value="BYN">BYN - Belarusian ruble</option>
<option value="BZD">BZD - Belize Dollar</option>
<option value="CAD">CAD - Canada Dollar</option>
<option value="CDF">CDF - Congolese Francs </option>
<option value="CHF">CHF - Swiss Francs</option>
<option value="CLP">CLP - Chilean Pesos</option>
<option value="CNY">CNY - Chinese Yuan</option>
<option value="COP">COP - Colombia Peso</option>
<option value="CRC">CRC - Costa Rican Colones</option>
<option value="CUP">CUP - Cuban Pesos</option>
<option value="CVE">CVE - Cape Verdean Escudos</option>
<option value="CZK">CZK - Czech Koruny</option>
<option value="DJF">DJF - Djibouti Franc</option>
<option value="DKK">DKK - Denmark Krone</option>
<option value="DOP">DOP - Dominican Republich Peso</option>
<option value="DZD">DZD - Algerian Dinars</option>
<option value="EGP">EGP - Egypt Pound</option>
<option value="ERN">ERN - Eritrean Nakfas</option>
<option value="ETB">ETB - Ethiopian Birrs</option>
<option value="EUR">EUR - Euros</option>
<option value="FJD">FJD - Fijian Dollars</option>
<option value="FKP">FKP - Falkland Island Pounds</option>
<option value="FOK">FOK - Faroese Krona</option>
<option value="GBP">GBP - British Pounds</option>
<option value="GEL">GEL - Georgia Lari</option>
<option value="GGP">GGP - Guernsey Pounds</option>
<option value="GHS">GHS - Ghana New Cedi</option>
<option value="GIP">GIP - Gibraltar Pound</option>
<option value="GMD">GMD - Gambia Dalasi</option>
<option value="GNF">GNF - Guinea Franc</option>
<option value="GTQ">GTQ - Guatemala Quetzal</option>
<option value="GYD">GYD - Guyana Dollar</option>
<option value="HKD">HKD - Hong Kong Dollar</option>
<option value="HRK">HRK - Croatian Kuna</option>
<option value="HNL">HNL - Honduras Lempira</option>
<option value="HTG">HTG - Haitian Gourdes</option>
<option value="HUF">HUF - Hungarian Forints</option>
<option value="IDR">IDR - Indonesia Rupiah</option>
<option value="ILS">ILS - Israel New Shekel</option>
<option value="IMP">IMP - Isle of Man Pounds</option>
<option value="INR">INR - India Rupee</option>
<option value="IQD">IQD - Iraq Dinar</option>
<option value="IRR">IRR - Iranian Rials</option>
<option value="ISK">ISK - Icelandic Kronur</option>
<option value="JEP">JEP - Jersey Pounds</option>
<option value="JMD">JMD - Jamaica Dollar</option>
<option value="JOD">JOD - Jordan Dinar</option>
<option value="JPY">JPY - Japan Yen</option>
<option value="KES">KES - Kenya Shilling</option>
<option value="KGS">KGS - Kyrgyzstan Som</option>
<option value="KHR">KHR - Cambodian Riels</option>
<option value="KMF">KMF - Comorian Francs</option>
<option value="KRW">KRW - South Korean Won</option>
<option value="KWD">KWD - Kuwaiti Dinars</option>
<option value="KYD">KYD - Caymanian Dollar</option>
<option value="KZT">KZT - Kazakhstani Tenge</option>
<option value="KID">KID - Kiribati Dollar</option>
<option value="LAK">LAK - Laos Kip</option>
<option value="LBP">LBP - Lebanon Pound</option>
<option value="LKR">LKR - Sri Lankan Rupee</option>
<option value="LRD">LRD - Liberia Dollar</option>
<option value="LSL">LSL - Lesotho Loti</option>
<option value="LYD">LYD - Libya Dinar</option>
<option value="MAD">MAD - Morocco Dirham</option>
<option value="MDL">MDL - Moldova Leu</option>
<option value="MGA">MGA - Malagasy Ariary</option>
<option value="MKD">MKD - Macedonia Denar</option>
<option value="MMK">MMK - Malawi Kwacha</option>
<option value="MNT">MNT - Mongolia Tugrik</option>
<option value="MOP">MOP - Macau Pataca</option>
<option value="MRU">MRU - Mauritanian Ouguiyas</option>
<option value="MUR">MUR - Mauritius Rupee</option>
<option value="MVR">MVR - Maldives Rufiyaa</option>
<option value="MWK">MWK - Malawi Kwacha</option>
<option value="MXN">MXN - Mexico Peso</option>
<option value="MYR">MYR - Malaysia Ringgit</option>
<option value="MZN">MZN - Mozambique New Metical</option>
<option value="NAD">NAD - Namibia Dollar</option>
<option value="NGN">NGN - Nigeria Naira</option>
<option value="NIO">NIO - Nicaragua Cordoba Oro</option>
<option value="NOK">NOK - Norway Kroner</option>
<option value="NPR">NPR - Nepal Rupee</option>
<option value="NZD">NZD - New Zealand Dollar</option>
<option value="OMR">OMR - Oman Rial</option>
<option value="PAB">PAB - Panama Balboa</option>
<option value="PEN">PEN - Peru Nuevo Sol</option>
<option value="PGK">PGK - Papua New Guinea Kina</option>
<option value="PHP">PHP - Philippines Peso</option>
<option value="PKR">PKR - Pakistan Rupee</option>
<option value="PLN">PLN - Poland Zloty</option>
<option value="PYG">PYG - Paraguay Guarani</option>
<option value="QAR">QAR - Qatar Rial</option>
<option value="RON">RON - Romania New Lei</option>
<option value="RSD">RSD - Serbia Dinar</option>
<option value="RUB">RUB - Russia Rouble</option>
<option value="RWF">RWF - Rwanda Franc</option>
<option value="SAR">SAR - Saudi Arabia Riyal</option>
<option value="SBD">SBD - Solomon Islands Dollar</option>
<option value="SCR">SCR - Seychelles Rupee</option>
<option value="SDG">SDG - Sudan Pound</option>
<option value="SEK">SEK - Sweden Krona</option>
<option value="SGD">SGD - Singapore Dollar</option>
<option value="SHP">SHP - St Helena Pound</option>
<option value="SLE">SLE - Isle of Man Pounds</option>
<option value="SLL">SLL - Sierra Leone Leone</option>
<option value="SOS">SOS - Somali Shilling</option>
<option value="SRD">SRD - Suriname Dollar</option>
<option value="STN">STN - Sao Tomean Dobras</option>
<option value="SYP">SYP - Syrian Pounds</option>
<option value="SZL">SZL - Swazi Emalangeni</option>
<option value="SSP">SSP - South Sudsnese p</option>
<option value="THB">THB - Thailand Baht</option>
<option value="TJS">TJS - Tajikistani Somoni</option>
<option value="TMT">TMT - Turkmenistani Manats</option>
<option value="TND">TND - Tunisia Dinar</option>
<option value="TOP">TOP - Tonga Pa'anga</option>
<option value="TRY">TRY - Turkish New Lira</option>
<option value="TTD">TTD - Trinidad/Tobago Dollar</option>
<option value="TVD">TVD - Tuvaluan Dollars</option>
<option value="TWD">TWD - Taiwan Dollar</option>
<option value="TZS">TZS - Tanzania Shilling</option>
<option value="UAH">UAH - Ukraine Hryvnia</option>
<option value="UGX">UGX - Uganda Shilling</option>
<option value="UYU">UYU - Uruguay Peso</option>
<option value="UZS">UZS - Uzbekistani Sums</option>
<option value="VES">VES - Venezuelan Bolívares</option>
<option value="VND">VND - Vietnam Dong</option>
<option value="VUV">VUV - Vanuatu Vatu</option>
<option value="WST">WST - Samoan Tala</option>
<option value="XAF">XAF - Central African Francs</option>
<option value="XCD">XCD - East Caribbean Dollars</option>
<option value="XDR">XDR - IMF Special Drawing Rights</option>
<option value="XOF">XOF - Convert CFA Francs</option>
<option value="XPF">XPF - CFP Francs</option>
<option value="YER">YER - Yemen Rial</option>
<option value="ZAR">ZAR - South African Rand</option>
<option value="ZMW">ZMW - Zambian Kwacha</option>
<option value="ZWL">ZWL - Zimbabwean Dollars</option>
  </select>
    </div>

<div className='result'>
  <p>{amount} {fromCurrency} Equal to {convertedAmount} {toCurrency}</p>
</div>

</div>
</div>
</>
    
  )
};

export default App;
