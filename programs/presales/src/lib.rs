use anchor_lang::prelude::*;

declare_id!("HQtXzrHTYLt8ZywmvMoNMWRsQBj9eXF1dHjF9DsZr1NY");

#[program]
pub mod presales {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
