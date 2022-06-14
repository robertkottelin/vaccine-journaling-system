use anchor_lang::prelude::*;

declare_id!("HCjp3FqbKxuHbxrSSMDE7DEzY3jkprmF5vfchJoFEwcE");

#[program]
pub mod vaccinebackend {
  use super::*;
  pub fn initialize(ctx: Context<Initialize>) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    base_account.total_data_entries = 0;
    Ok(())
  }

  // Store account, user and vaccine entry with the user Solana address as the key, 
  // add the entry to the total vaccine entries
  pub fn add_data(ctx: Context<AddData>, data: String) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    let user = &mut ctx.accounts.user;
  
  // Build the struct.
      let data_struct = DataStruct {
        data: data.to_string(),
        user_address: *user.to_account_info().key,
      };
      
  // Add it to the gif_list vector.
      base_account.data_struct_vector.push(data_struct);
      base_account.total_data_entries += 1;
      Ok(())
    }
  /*
  // delete specific struct in a vector of structs
  pub fn delete_data_entry(i: u64) -> Result <Vec<DataStruct>> {
    data_struct_vector.remove(i);
    base_account.total_data_entries -= 1;
    Ok(())
  }*/
}

#[derive(Accounts)]
pub struct Initialize<'info> {
  #[account(init, payer = user, space = 90000)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program <'info, System>,
}

// Add the signer who calls the AddGif method to the struct so that we can save it
#[derive(Accounts)]
pub struct AddData<'info> {
  #[account(mut)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>
}

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct DataStruct {
    pub data: String,
    pub user_address: Pubkey,
}

#[account]
pub struct BaseAccount {
    pub total_data_entries: u64,
    pub data_struct_vector: Vec<DataStruct>,
}