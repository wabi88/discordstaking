import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  
  
  return (
    
    <div className={styles.container}><Image src="/logo.webp" alt="drop" width={150} height={150} />

<h3><em><b>Welcome Discord Members!</b></em></h3>
    
      <h5>As a token of appreciation to our growing community we've implemented a Discord Staking app <br/>
      The way it works, members can request a Discord Member NFT Airdrop on our srd-pump Discord Channel. <br/><br/>
      Occasionally, we'll Deposit Rewards(SRD) into the app and Discord Members will then be able to <br/>
      connect their wallets to the app and start staking SRD! Members will be notified through our Discord <br/>
      srd-pump channel when staking is enabled and disabled.<br/><br/>
      SRD is the official currency in our Crypto Voyager Play-To-Earn Blockchain game,<br/>
      it can be used to purchase Premium Planets with extra staking power.<br/>
      SRD also has a liquidity pool started on UniSwap, making SRD tradeable for other ERC20 tokens!
      <em>*Note: All Discord Member NFTs are set to "unstake" once staking has been disabled*</em></h5>
      
      <a href="https://discord.gg/JT7tv2Kypv"><button type="button">Join Discord!</button></a>
      <a href="https://thecryptovoyager.com/"><button type="button">Crypto Voyager</button></a>
      <a href="https://uniswap.org/"><button type="button">UniSwap</button></a>

      {/* Top Section */}
      <div className={styles.nftBoxGrid}>
        
    

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/stardust.jpg" alt="token" width={70} height={70} />
          <h2 className={styles.selectBoxTitle}><em>Discord Members Staking!</em></h2>
          <p className={styles.selectBoxDescription}>
            <em>Enter here to Stake your Discord Member NFT!</em>
        
          </p>
        
       
        </div>
        
      </div>
      <h5>StarDust(SRD) Token Address: <br/><b>0x40EfC82d1b2b5360CE2ef59573ba43946F2Ee6Be</b><br/></h5>
    </div>
    
  );
};

export default Home;
