const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

describe("vaccinebackend", () => {

  const provider = anchor.AnchorProvider.env();

  anchor.setProvider(provider);
  const program = anchor.workspace.Vaccinebackend;
  const baseAccount = anchor.web3.Keypair.generate();

  it("Uses the workspace to invoke the initialize instruction", async () => {

    await program.rpc.initialize({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
    // #endregion code
  });
/*
  it("Uses sends", async () => {
    // #region code
    // Read the deployed program from the workspace.

    // Execute the RPC.
    await program.rpc.initialize({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
    // #endregion code
  });*/
});

/*const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

const main = async() => {
  console.log("🚀 Starting test...")

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Vaccinebackend;
  const baseAccount = anchor.web3.Keypair.generate();
  let tx = await program.rpc.initialize({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  });
  console.log("📝 Your transaction signature", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('👀 Data Count', account.totalDataEntries.toString())

  await program.rpc.add_data("testing data entry 1", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });

  await program.rpc.add_data("testing data entry 2", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });

  await program.rpc.add_data("testing data entry 3", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });
  
  // Call the account.
  account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('👀 Data Count', account.totalDataEntries.toString())

  console.log('👀 Data List', account.data_struct_list)
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
*/