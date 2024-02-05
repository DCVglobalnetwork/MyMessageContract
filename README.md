# Set up 
you can clone this repo

Just make sure to:

run npm install to set up all the dependencies (hardhat, ethers, etc.)
rename .env-example to .env and then fill in the environment variables with your own info
set up an Alchemy account 
set up a Metamask wallet with fake testnet ether
And then you should be able to:

run npx hardhat run scripts/deploy.js to deploy the contract to the Sepolia testnet

# Create from scratch
Create a project name and open in your code editor
you should have 
![copyx](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/3510e0c7-54fe-49bd-8525-688c669860a0)

you should install 

```shell
npm init --yes
```

create account on Alchemy and create an app 

![Screenshot 2024-02-05 131948](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/18740a07-1f26-4aaf-8148-a734d1c867dc)


Install Hardhat for more details please see documentations on set up and deployment https://hardhat.org/ 


![copy](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/ab54769c-edfb-423e-8e4c-05d043aafba0)

you should install 

```shell
npm install --save-doenv
```

you should also install 

![Screenshot 2024-02-05 132135](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/30b90f0d-45cf-417e-ae57-d41aaa67591d)

# Compile your smart contract 

```shell
npx hardhat compile
```

![Screenshot 2024-02-05 132135](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/1088378c-018a-4d5a-94ef-596b60765591)

After finished with deploy.js you should deploy your smart contract 

```shell
npx hardhat run scripts/deploy.js ---network sepolia

```
![Screenshot 2024-02-05 132135](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/a8297cce-f347-4689-b10b-ad0b0260c7f6)

Copy address and search on Etherscan https://sepolia.etherscan.io/ 

you should be able to see 

![Screenshot 2024-02-05 132515](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/39c3ba36-586b-4dae-8274-ee86e5414869)


It should also match the metamask address. Sent from 

![Screenshot 2024-02-05 132813](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/4405d5bb-fd4b-4a2a-8611-142dfc16f63b)




You should be able to see activities on your Alchemy app 

![Screenshot 2024-02-05 132155](https://github.com/DCVglobalnetwork/MyMessageContract/assets/105791829/b98b1752-c5d3-42c4-9865-c299579e9501)









