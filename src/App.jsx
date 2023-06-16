import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles.css';
import Home from './components/Home/Home'
import Police from './components/Police/Complaint'
import FIRSTORAGE from "./contracts/FIRSTORAGE.json";
import Web3 from "web3";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying Metamask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // Network Id
    const networkId = await web3.eth.net.getId();
    const networkData = FIRSTORAGE.networks[networkId];

    if (networkData) {
      const firstorage = web3.eth.Contract(
        FIRSTORAGE.abi,
        networkData.address
      );
      this.setState({ firstorage });
      const firCount = await firstorage.methods.FirCount().call();
      this.setState({ firCount });

      for (let i = 1; i <= firCount; i++) {
        const fir = await firstorage.methods.FIRs(i).call();
        this.setState({
          firs: [...this.state.firs, fir],
        });
      }


      this.setState({ loading: false });
    } else {
      window.alert("Decentragram contract not deploy to detect the network");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      firstorage: null,
      firs: [],
      loading: true,
    };
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Police" element={<Police />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
