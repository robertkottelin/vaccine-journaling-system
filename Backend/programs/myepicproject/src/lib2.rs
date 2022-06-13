use anchor_lang::prelude::*;

declare_id!("F6pE1t32WvhFdrc8AZSSQfy4dzgYUtf5muexBh1RHxB9");

#[program]
pub mod myepicproject {
  use super::*;
  pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    base_account.total_data = 0;
    Ok(())
  }
  pub fn set_data(ctx: Context<AddData>, data_link: String) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    let user = &mut ctx.accounts.user;
  
  // Build the struct.
      let dataitem = Data {
        data_link: data_link.to_string(),
        user_address: *user.to_account_info().key,
      };
      
  // Add it to the data vector.
      base_account.data_list.push(dataitem);
      base_account.total_data += 1;
      Ok(())
    }

    //pub fn delete_data() -> Result <()> {}
}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
  #[account(init, payer = user, space = 9000)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program <'info, System>,
}

#[derive(Accounts)]
pub struct AddData<'info> {
  #[account(mut)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>,
}

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct Data {
    pub data_link: String,
    pub user_address: Pubkey,
}

#[account]
pub struct BaseAccount {
    pub total_data: u64,
	// Attach a Vector of type ItemStruct to the account.
+  0    pub data_list: Vec<Data>,
}