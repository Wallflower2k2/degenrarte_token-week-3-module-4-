<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/web3@1.5.3/dist/web3.min.js"></script>
</head>
<body>
    <h1>MyContract Value: <span id="value"></span></h1>

    <script>
       
        if (typeof web3 !== 'undefined') {
            
            web3 = new Web3(web3.currentProvider);
        } else {
            
            console.log('Please install MetaMask.');
        }

        
        const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        const contractABI = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newValue",
                        "type": "uint256"
                    }
                ],
                "name": "setValue",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getValue",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];

        // Instantiate the contract object
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Get and display the initial value
        contract.methods.getValue().call()
            .then(function(result) {
                document.getElementById('value').innerText = result;
            })
            .catch(function(error) {
                console.log(error);
            });

      
        const newValue = 42;
        contract.methods.setValue(newValue).send({ from: 'YOUR_WALLET_ADDRESS' })
            .then(function() {
               
                return contract.methods.getValue().call();
            })
            .then(function(result) {
                document.getElementById('value').innerText = result;
            })
            .catch(function(error) {
                console.log(error);
            });
    </script>
</body>
</html>