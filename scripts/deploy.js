async function main() {
    const MyMessage = await ethers.getContractFactory("MyMessage");

    // Start deployment, returning a promise that resolves to a contract object
    const my_message = await MyMessage.deploy("My Message!");
    console.log("Contract deployed to address:", my_message.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });