const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

const main = async() => {
  console.log("🚀 Starting test...")

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Myepicproject;
  const baseAccount = anchor.web3.Keypair.generate();
  let tx = await program.rpc.startStuffOff({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  });
  console.log("📝 Your transaction signature", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('👀 Data Count', account.totalData.toString())

  await program.rpc.setData("testing data entry 1", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });

  await program.rpc.setData("testing data entry 2", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });

  await program.rpc.setData("testing data entry 3", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });
  
  // Call the account.
  account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('👀 Data Count', account.totalData.toString())

  console.log('👀 Data List', account.dataList)
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();