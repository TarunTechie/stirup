import Top from "../components/top"
import Bottom from "../components/bottom";
import Logo from "../components/logo";
import { useState } from "react";

function CameraScreen (){
    const [ingredients, setIngredients] = useState(['']);
    
  
    const handleAddInput = () => {
      const Ingredients = [...ingredients];
      if(Ingredients.length<6){
        setIngredients([...ingredients, '']);
      }
      
    };
  
    const handleDeleteInput = (index) => {
      const updatedIngredients = [...ingredients];
      if(updatedIngredients.length>1){
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
      }
      
    };
  
    const handleInputChange = (index, event) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = event.target.value;
      setIngredients(updatedIngredients);
    };

return(
    <div className="bg-white">
    <Top />
    <div >
        <img src="/images/pagebg.jpg" className="w-screen" />
    </div>
    <div className="ml-4 gap-10">
    <h1 className="font-heading text-7xl ml-auto underline decoration-orange decoration-1 underline-offset-[12px] ">Snap and Cook</h1>
    <h1 className="font-light text-5xl font-tego pt-4">Ingredients</h1>
    <div className="pt-10">
      <button className="cambtn hover:bg-orange hover:text-white" onClick={handleAddInput}>
        <h1>ADD</h1> 
      <svg width="40" height="50" viewBox="0 0 52 48" xmlns="http://www.w3.org/2000/svg" id="sv" fill="#FF670E">
      <path d="M24.7143 25.1823H26.7143V23.1823H24.7143V25.1823ZM17 25.1823H15V27.1823H17V25.1823ZM17 22.6182V20.6182H15V22.6182H17ZM24.7143 22.6182V24.6182H26.7143V22.6182H24.7143ZM24.7143 14.9259V12.9259H22.7143V14.9259H24.7143ZM27.2857 14.9259H29.2857V12.9259H27.2857V14.9259ZM27.2857 22.6182H25.2857V24.6182H27.2857V22.6182ZM35 22.6182H37V20.6182H35V22.6182ZM35 25.1823V27.1823H37V25.1823H35ZM27.2857 25.1823V23.1823H25.2857V25.1823H27.2857ZM27.2857 32.8746V34.8746H29.2857V32.8746H27.2857ZM24.7143 32.8746H22.7143V34.8746H24.7143V32.8746ZM2.58131 11.182L4.36226 12.0921L4.36229 12.092L2.58131 11.182ZM4.91205 8.8579L5.81794 10.641L5.818 10.641L4.91205 8.8579ZM13.9887 8.26097L13.7618 6.27389L13.7616 6.27391L13.9887 8.26097ZM15.9192 7.07128L17.5932 8.16563L17.5932 8.16558L15.9192 7.07128ZM16.2222 6.50553L14.4344 5.60903L14.4343 5.60913L16.2222 6.50553ZM16.8283 5.37407L18.5023 6.4685L18.5024 6.46843L16.8283 5.37407ZM20.6893 2.99465L20.9163 4.98174L20.9163 4.98173L20.6893 2.99465ZM31.3107 2.99465L31.0837 4.98173L31.0837 4.98173L31.3107 2.99465ZM35.1717 5.37407L36.8461 4.28018L36.8457 4.27967L35.1717 5.37407ZM35.7779 6.50553L37.5662 5.6101L37.5655 5.60867L35.7779 6.50553ZM36.0808 7.07128L37.7546 5.97663L37.7544 5.97623L36.0808 7.07128ZM38.0112 8.26097L37.7843 10.2481L37.7845 10.2481L38.0112 8.26097ZM47.088 8.8579L46.182 10.6409L46.1821 10.641L47.088 8.8579ZM49.4187 11.182L47.6376 12.0919L47.6377 12.0921L49.4187 11.182ZM49.4187 42.6015L47.6377 41.6914L47.6376 41.6916L49.4187 42.6015ZM47.088 44.9256L46.1822 43.1424L46.182 43.1425L47.088 44.9256ZM4.91205 44.9256L5.81803 43.1425L5.81779 43.1424L4.91205 44.9256ZM2.58131 42.6015L4.36226 41.6915L4.36224 41.6914L2.58131 42.6015ZM24.7143 23.1823H17V27.1823H24.7143V23.1823ZM19 25.1823V22.6182H15V25.1823H19ZM17 24.6182H24.7143V20.6182H17V24.6182ZM26.7143 22.6182V14.9259H22.7143V22.6182H26.7143ZM24.7143 16.9259H27.2857V12.9259H24.7143V16.9259ZM25.2857 14.9259V22.6182H29.2857V14.9259H25.2857ZM27.2857 24.6182H35V20.6182H27.2857V24.6182ZM33 22.6182V25.1823H37V22.6182H33ZM35 23.1823H27.2857V27.1823H35V23.1823ZM25.2857 25.1823V32.8746H29.2857V25.1823H25.2857ZM27.2857 30.8746H24.7143V34.8746H27.2857V30.8746ZM26.7143 32.8746V25.1823H22.7143V32.8746H26.7143ZM4 36.9962V16.7873H0V36.9962H4ZM4 16.7873C4 15.265 4.00156 14.2439 4.06598 13.4577C4.12848 12.695 4.23995 12.3314 4.36226 12.0921L0.800351 10.272C0.341353 11.1702 0.162178 12.1201 0.0793434 13.131C-0.00156434 14.1184 0 15.3312 0 16.7873H4ZM4.36229 12.092C4.68106 11.4681 5.19029 10.9599 5.81794 10.641L4.00616 7.07483C2.62673 7.77565 1.50416 8.89451 0.800325 10.272L4.36229 12.092ZM5.818 10.641C6.05998 10.518 6.4267 10.4065 7.19282 10.3441C7.98211 10.2798 9.00696 10.2783 10.5333 10.2783V6.27825C9.07278 6.27825 7.85741 6.27671 6.86801 6.35731C5.85543 6.43981 4.90498 6.61815 4.00611 7.07485L5.818 10.641ZM10.5333 10.2783H13.3457V6.27825H10.5333V10.2783ZM13.3457 10.2783C13.6252 10.2783 13.9244 10.2813 14.2158 10.248L13.7616 6.27391C13.7697 6.27298 13.7577 6.27511 13.6906 6.27655C13.6161 6.27815 13.5179 6.27825 13.3457 6.27825V10.2783ZM14.2156 10.2481C15.5945 10.0906 16.8332 9.32822 17.5932 8.16563L14.2451 5.97692C14.1377 6.1412 13.961 6.25113 13.7618 6.27389L14.2156 10.2481ZM17.5932 8.16558C17.7538 7.91992 17.8852 7.65108 18.0101 7.40194L14.4343 5.60913C14.3574 5.76263 14.3134 5.85005 14.2788 5.91565C14.2475 5.97467 14.2404 5.98412 14.2451 5.97697L17.5932 8.16558ZM18.01 7.40203C18.325 6.77387 18.4136 6.60425 18.5023 6.4685L15.1543 4.27964C14.9106 4.65252 14.7059 5.06768 14.4344 5.60903L18.01 7.40203ZM18.5024 6.46843C19.0435 5.64071 19.9279 5.09463 20.9163 4.98174L20.4624 1.00757C18.2944 1.25519 16.348 2.45368 15.1543 4.27971L18.5024 6.46843ZM20.9163 4.98173C21.0786 4.9632 21.2711 4.96011 21.9752 4.96011V0.960114C21.3678 0.960114 20.9049 0.957028 20.4624 1.00758L20.9163 4.98173ZM21.9752 4.96011H30.0248V0.960114H21.9752V4.96011ZM30.0248 4.96011C30.7289 4.96011 30.9214 4.9632 31.0837 4.98173L31.5376 1.00758C31.0951 0.957028 30.6322 0.960114 30.0248 0.960114V4.96011ZM31.0837 4.98173C32.0721 5.09463 32.9566 5.64073 33.4977 6.46848L36.8457 4.27967C35.652 2.45366 33.7055 1.2552 31.5376 1.00758L31.0837 4.98173ZM33.4974 6.46796C33.5864 6.60413 33.6751 6.77417 33.9902 7.40239L37.5655 5.60867C37.294 5.06754 37.0894 4.65258 36.8461 4.28018L33.4974 6.46796ZM33.9895 7.40096C34.1146 7.65074 34.246 7.91988 34.4072 8.16632L37.7544 5.97623C37.7592 5.98363 37.7522 5.97445 37.7213 5.91584C37.6868 5.85063 37.643 5.7634 37.5662 5.6101L33.9895 7.40096ZM34.407 8.16592C35.1669 9.32801 36.4051 10.0905 37.7843 10.2481L38.2381 6.27389C38.0391 6.25116 37.8624 6.14142 37.7546 5.97663L34.407 8.16592ZM37.7845 10.2481C38.0759 10.2813 38.3746 10.2783 38.6544 10.2783V6.27825C38.4822 6.27825 38.384 6.27815 38.3094 6.27655C38.2424 6.27512 38.2302 6.27298 38.2379 6.27387L37.7845 10.2481ZM38.6544 10.2783H41.4667V6.27825H38.6544V10.2783ZM41.4667 10.2783C42.993 10.2783 44.0179 10.2798 44.8072 10.3441C45.5734 10.4065 45.9401 10.518 46.182 10.6409L47.994 7.07487C47.0951 6.61815 46.1446 6.43981 45.132 6.35731C44.1426 6.27671 42.9272 6.27825 41.4667 6.27825V10.2783ZM46.1821 10.641C46.8098 10.9599 47.319 11.4682 47.6376 12.0919L51.1997 10.2722C50.4959 8.89446 49.3732 7.77563 47.994 7.07486L46.1821 10.641ZM47.6377 12.0921C47.76 12.3314 47.8715 12.695 47.934 13.4577C47.9984 14.2439 48 15.265 48 16.7873H52C52 15.3312 52.0016 14.1184 51.9207 13.131C51.8378 12.12 51.6586 11.1702 51.1996 10.2719L47.6377 12.0921ZM48 16.7873V36.9962H52V16.7873H48ZM48 36.9962C48 38.5185 47.9984 39.5397 47.934 40.3259C47.8715 41.0886 47.76 41.4521 47.6377 41.6914L51.1996 43.5117C51.6586 42.6134 51.8378 41.6635 51.9207 40.6525C52.0016 39.6651 52 38.4523 52 36.9962H48ZM47.6376 41.6916C47.319 42.3154 46.8097 42.8237 46.1822 43.1424L47.9938 46.7087C49.3732 46.008 50.496 44.8889 51.1997 43.5114L47.6376 41.6916ZM46.182 43.1425C45.9401 43.2655 45.5734 43.377 44.8072 43.4394C44.0179 43.5037 42.993 43.5052 41.4667 43.5052V47.5052C42.9272 47.5052 44.1426 47.5068 45.132 47.4262C46.1446 47.3437 47.0951 47.1653 47.994 46.7086L46.182 43.1425ZM41.4667 43.5052H10.5333V47.5052H41.4667V43.5052ZM10.5333 43.5052C9.00696 43.5052 7.98212 43.5037 7.19283 43.4394C6.42672 43.377 6.06001 43.2655 5.81803 43.1425L4.00608 46.7086C4.90495 47.1653 5.85542 47.3437 6.868 47.4262C7.8574 47.5068 9.07278 47.5052 10.5333 47.5052V43.5052ZM5.81779 43.1424C5.19034 42.8237 4.68108 42.3154 4.36226 41.6915L0.800354 43.5116C1.50414 44.8889 2.62667 46.0079 4.00631 46.7087L5.81779 43.1424ZM4.36224 41.6914C4.23996 41.4521 4.12848 41.0886 4.06598 40.3259C4.00156 39.5397 4 38.5185 4 36.9962H0C0 38.4523 -0.00156426 39.6651 0.079343 40.6525C0.162176 41.6635 0.341348 42.6134 0.800369 43.5116L4.36224 41.6914Z" />
      </svg>
      </button>
      {ingredients.map((ingredient, index) => (
          <div key={index} className="flex justify-between bg-peach w-[55%] border-2 border-black p-2 m-4">
          <input
            type="text"
            className="bg-transparent w-full focus: outline-none"
            value={ingredient}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter ingredient"
          />
          <button onClick={() => handleDeleteInput(index)}><span><img src="/icons/cross.svg" className="w-4 h-4"/></span></button>
          </div>
    ))}
<button className="cambtn hover:bg-orange hover:text-white">
      <h1>Search Recipe</h1>
      <svg width="40" height="65" viewBox="0 0 53 65" id="sv" fill="#FF670E" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5815 14.2351C10.7992 15.4113 10.3995 16.8179 10.3912 18.2696C10.3818 19.7219 10.7637 21.225 11.5608 22.6058C11.8635 23.1299 12.5342 23.3104 13.0593 23.0073C13.5833 22.7047 13.7634 22.033 13.4608 21.5089C12.858 20.4649 12.579 19.3416 12.5841 18.2836C12.591 17.2247 12.884 16.2368 13.407 15.4512C13.7422 14.9475 13.6069 14.2651 13.1032 13.9299C12.5967 13.594 11.9176 13.7309 11.5815 14.2351Z" fill="white"/>
<path d="M21.535 5.57776C19.8632 5.03896 18.11 4.82472 16.3766 4.97445C14.6433 5.12413 12.9289 5.64026 11.3489 6.55245C9.76992 7.46407 8.46572 8.69075 7.46844 10.1176C5.97366 12.2573 5.16758 14.8416 5.09988 17.5213C5.03315 20.2027 5.70561 22.9871 7.17785 25.5371C8.76601 28.2879 11.0556 30.3683 13.6418 31.6335C15.9601 32.7665 18.5225 33.2458 21.0327 32.9557L24.9621 39.7616L24.8411 39.8314C24.2699 40.1612 24.0735 40.8916 24.4033 41.4627L32.4463 55.3937L32.4487 55.3979C34.1469 58.3393 37.9085 59.3458 40.849 57.6481C43.7896 55.9504 44.7987 52.1895 43.1004 49.2481L35.0549 35.3129C34.7252 34.7417 33.9945 34.5466 33.4241 34.8759L33.3024 34.9462L29.373 28.1403C30.8793 26.1116 31.7463 23.6522 31.9234 21.0785C32.1206 18.2062 31.4639 15.1831 29.8758 12.4323C27.9114 9.03212 24.8788 6.65622 21.535 5.57776ZM38.1518 52.9764C37.3748 53.4249 36.3812 53.1587 35.9327 52.3818C35.4836 51.604 35.7499 50.6104 36.5268 50.1618C37.3038 49.7132 38.2974 49.9795 38.7464 50.7573C39.195 51.5342 38.9288 52.5278 38.1518 52.9764ZM32.464 43.1249C31.6871 43.5735 30.693 43.3063 30.2444 42.5294C29.7954 41.7516 30.0616 40.758 30.8385 40.3095C31.6155 39.8609 32.6091 40.1271 33.0582 40.9049C33.5068 41.6819 33.241 42.6763 32.464 43.1249ZM29.491 20.9116C29.3271 23.2988 28.4545 25.5216 26.9794 27.2377L26.4156 27.8924L31.1917 36.1648L27.0727 38.5429L22.2967 30.2705L21.4478 30.4314C19.2238 30.8508 16.8627 30.4951 14.7134 29.4434C12.5634 28.3924 10.6352 26.6511 9.28853 24.3185C7.62431 21.436 7.18563 18.2321 7.79513 15.3986C8.10027 13.9815 8.66585 12.6606 9.46728 11.5135C10.2688 10.3666 11.3048 9.3932 12.5676 8.66308C13.8314 7.9345 15.1923 7.524 16.5864 7.40331C18.6763 7.22129 20.8453 7.69813 22.807 8.76626C24.7686 9.83429 26.5169 11.4892 27.765 13.6511C29.1117 15.9836 29.6557 18.5241 29.491 20.9116Z"/>
</svg>
</button>
    </div>
</div>
    <Bottom />
    </div>
)
}
export default CameraScreen