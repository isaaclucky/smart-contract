/* global AlgoSigner */

import React from 'react'
import AlgoSigner from './components/AlgoSigner/AlgoSigner'
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {Box,Stack} from "@mui/material"

function App() {
// const algodServer = 'https://testnet-algorand.api.purestake.io/ps2'
// const indexerServer = 'https://testnet-algorand.api.purestake.io/idx2'
// const token = { 'X-API-Key': 'YOUR API KEY HERE' }
// const port = '';


  return (
    <Box  >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      
    </Box>
  )
}

export default App