import * as React from 'react';
import Svg, {SvgProps, Path, Mask} from 'react-native-svg';

const TouchIcon: React.FC<SvgProps> = () => (
  <Svg width="23" height="24" viewBox="0 0 23 24" fill="none">
    <Mask id="path-1-inside-1_152_127" fill="white">
      <Path d="M14.8158 23.9982H14.6405C12.9062 23.5789 11.3151 22.7048 10.0309 21.4662C9.21418 20.6381 8.56109 19.6635 8.10584 18.5933C7.63771 17.526 7.38022 16.3783 7.34752 15.2133C7.34138 14.7444 7.43733 14.2799 7.62871 13.8518C7.82008 13.4238 8.1023 13.0425 8.45578 12.7345C8.80917 12.3856 9.22882 12.1109 9.69 11.9267C10.1512 11.7425 10.6446 11.6525 11.1411 11.6619C11.6371 11.6524 12.13 11.7421 12.5908 11.9259C13.0516 12.1096 13.471 12.3837 13.8244 12.7319C14.1926 13.031 14.4888 13.4091 14.6911 13.8381C14.8934 14.2672 14.9966 14.7363 14.993 15.2107C14.9889 15.5168 15.0491 15.8203 15.1697 16.1017C15.2902 16.3831 15.4685 16.636 15.6929 16.8442C16.2169 17.281 16.8774 17.5202 17.5595 17.5202C18.2416 17.5202 18.9022 17.281 19.4261 16.8442C19.6651 16.6447 19.8571 16.3947 19.9882 16.1123C20.1193 15.8299 20.1863 15.522 20.1844 15.2107C20.1886 14.1062 19.9505 13.0141 19.4869 12.0116C19.0233 11.0091 18.3454 10.1205 17.5011 9.40837C15.7781 7.80363 13.497 6.93455 11.143 6.98603C9.41539 6.96902 7.71769 7.43737 6.24315 8.33776C4.81442 9.14901 3.6571 10.3641 2.91641 11.8307C2.42433 12.8879 2.18473 14.045 2.21653 15.2107C2.2132 16.6951 2.49031 18.1668 3.03328 19.5483C3.06739 19.6225 3.08351 19.7038 3.08032 19.7854C3.07714 19.867 3.05474 19.9468 3.01496 20.0181C2.97517 20.0895 2.91911 20.1504 2.85134 20.196C2.78356 20.2417 2.70598 20.2706 2.6249 20.2806C2.23536 20.3932 1.98258 20.2804 1.86658 19.9424C1.25193 18.4405 0.935065 16.8335 0.933616 15.2107C0.906766 13.8633 1.20708 12.5295 1.8088 11.3236C2.62591 9.63308 3.92478 8.22194 5.54197 7.2678C7.23436 6.25885 9.17079 5.73275 11.1411 5.74662C12.4726 5.71785 13.7968 5.95184 15.0378 6.43522C16.2788 6.9186 17.4124 7.64188 18.3737 8.5637C19.3325 9.38421 20.1006 10.4041 20.6245 11.5521C21.1484 12.7002 21.4154 13.9488 21.4069 15.2107C21.4104 15.6849 21.3072 16.1539 21.1049 16.5829C20.9026 17.0118 20.6064 17.3898 20.2383 17.6889C19.4971 18.3422 18.543 18.7027 17.555 18.7027C16.5669 18.7027 15.6128 18.3422 14.8716 17.6889C14.5184 17.3808 14.2363 16.9996 14.0451 16.5717C13.8538 16.1438 13.7579 15.6794 13.764 15.2107C13.7659 14.8993 13.6989 14.5914 13.5678 14.309C13.4367 14.0266 13.2447 13.7767 13.0057 13.5772C12.7591 13.3369 12.4669 13.1483 12.1464 13.0225C11.8258 12.8968 11.4834 12.8363 11.1391 12.8448C10.7949 12.8363 10.4524 12.8968 10.1319 13.0225C9.81133 13.1483 9.51915 13.3369 9.27254 13.5772C9.0481 13.7853 8.86983 14.0383 8.74928 14.3197C8.62872 14.601 8.56855 14.9046 8.57265 15.2107C8.56185 16.2252 8.76406 17.2307 9.16622 18.1622C9.56839 19.0937 10.1615 19.9304 10.9073 20.6183C12.0499 21.6991 13.459 22.4572 14.9904 22.8153C15.3402 22.853 15.4763 23.0971 15.3988 23.5476C15.3752 23.6819 15.3023 23.8024 15.1945 23.8857C15.0867 23.9691 14.9516 24.0092 14.8158 23.9982ZM11.7247 15.2107C11.7206 15.8884 11.8586 16.5594 12.1299 17.1804C12.4012 17.8014 12.7997 18.3586 13.2998 18.8159C14.3904 19.8303 15.8356 20.3761 17.3245 20.3358C17.5002 20.3259 17.6753 20.3071 17.8491 20.2793C18.0615 20.2467 18.2757 20.2278 18.4905 20.2229C18.6719 20.2199 18.8515 20.2583 19.0158 20.3352C19.1028 20.3461 19.184 20.385 19.2471 20.446C19.3102 20.507 19.3518 20.5868 19.3657 20.6734C19.3929 20.7569 19.4001 20.8455 19.3867 20.9322C19.3733 21.019 19.3397 21.1013 19.2885 21.1726C19.2374 21.2439 19.1702 21.3022 19.0923 21.3427C19.0145 21.3832 18.9282 21.4048 18.8405 21.4058C18.3387 21.4837 17.8316 21.5214 17.3238 21.5188C15.9601 21.5737 14.6135 21.1992 13.4738 20.4481C12.5617 19.9129 11.8066 19.147 11.2844 18.2274C10.7622 17.3078 10.4913 16.2669 10.499 15.2094C10.4883 15.1235 10.4978 15.0364 10.5266 14.9549C10.5554 14.8733 10.6028 14.7996 10.665 14.7395C10.7273 14.6794 10.8026 14.6347 10.8851 14.6087C10.9676 14.5828 11.055 14.5764 11.1404 14.59C11.53 14.5904 11.7247 14.7973 11.7247 15.2107ZM8.39995 23.7729C8.32407 23.7734 8.24885 23.7588 8.17872 23.7298C8.10859 23.7008 8.04496 23.6581 7.99157 23.6041C6.99989 22.665 6.15449 21.5826 5.48353 20.393C4.57063 18.8208 4.10666 17.0283 4.14219 15.2107C4.1375 14.3485 4.31727 13.4953 4.66945 12.7083C5.02162 11.9213 5.53805 11.2188 6.18407 10.6478C7.54615 9.38533 9.34394 8.69898 11.2008 8.7325C13.0414 8.69223 14.8235 9.38059 16.1591 10.6478C16.8194 11.2103 17.3493 11.9098 17.7119 12.6978C18.0745 13.4858 18.2611 14.3433 18.2588 15.2107C18.2588 15.5864 18.0449 15.7742 17.6173 15.7742C17.1897 15.7742 16.9758 15.5864 16.9758 15.2107C16.9839 14.5049 16.8366 13.806 16.5443 13.1635C16.252 12.521 15.8219 11.9507 15.2846 11.4931C14.1829 10.4511 12.7155 9.88442 11.1995 9.91543C9.68422 9.88476 8.21766 10.4512 7.11639 11.4924C6.57906 11.9501 6.14901 12.5204 5.85672 13.1629C5.56444 13.8053 5.41708 14.5042 5.4251 15.21C5.37793 16.8207 5.76045 18.4149 6.53337 19.8288C7.19573 20.8919 7.97872 21.8748 8.86676 22.7582C9.17796 23.0209 9.17796 23.3022 8.86676 23.6022C8.80416 23.6602 8.73065 23.7051 8.65051 23.7345C8.57037 23.7638 8.48519 23.7769 8.39995 23.7729ZM0.641455 9.23956C0.213818 9.23956 0 9.05171 0 8.67602C0.0143278 8.55621 0.0541783 8.44086 0.116864 8.33776C1.31402 6.65024 2.91939 5.2937 4.783 4.39489C6.77626 3.4071 8.97504 2.90518 11.1995 2.93019C13.424 2.90518 15.6227 3.4071 17.616 4.39489C19.4823 5.26375 21.0904 6.60333 22.2821 8.28192C22.3448 8.38503 22.3847 8.50037 22.399 8.62018C22.3957 8.75287 22.3479 8.88059 22.2632 8.98281C22.1785 9.08503 22.0619 9.15579 21.9322 9.18373C21.8715 9.21496 21.8052 9.2339 21.7371 9.23948C21.669 9.24506 21.6005 9.23716 21.5355 9.21623C21.4705 9.19531 21.4103 9.16177 21.3582 9.11753C21.3062 9.07329 21.2634 9.01923 21.2323 8.95844C20.1324 7.47508 18.6919 6.27798 17.0323 5.46809C15.2124 4.59632 13.2173 4.15217 11.1995 4.1696C9.17796 4.11547 7.17434 4.56151 5.36667 5.46809C3.67638 6.28191 2.2135 7.50101 1.10826 9.01687C1.05403 9.08872 0.983305 9.14647 0.902056 9.18523C0.820808 9.22399 0.731424 9.24262 0.641455 9.23956ZM18.4308 2.93084C18.3301 2.94363 18.2279 2.92383 18.1393 2.87435C15.9878 1.78179 13.6124 1.20287 11.1995 1.18306C8.78098 1.15587 6.39433 1.73629 4.25841 2.8711C4.16954 2.92211 4.06882 2.94885 3.96635 2.94864C3.86389 2.94843 3.76328 2.92128 3.67462 2.86991C3.58595 2.81855 3.51236 2.74477 3.46122 2.65598C3.41007 2.56719 3.38317 2.46651 3.38322 2.36404C3.37413 2.25223 3.39663 2.14011 3.44817 2.04047C3.49972 1.94083 3.57822 1.85768 3.67473 1.8005C5.99436 0.584418 8.58067 -0.033929 11.1995 0.00143601C13.8123 0.0213925 16.386 0.637837 18.7243 1.80374C18.8004 1.82991 18.8692 1.87389 18.9249 1.93202C18.9805 1.99015 19.0215 2.06075 19.0444 2.13793C19.0673 2.21512 19.0714 2.29665 19.0563 2.37573C19.0413 2.45482 19.0076 2.52916 18.958 2.59258C18.9059 2.68846 18.8304 2.76966 18.7386 2.82867C18.6468 2.88768 18.5416 2.92259 18.4328 2.93019L18.4308 2.93084Z" />
    </Mask>
    <Path
      d="M14.8158 23.9982H14.6405C12.9062 23.5789 11.3151 22.7048 10.0309 21.4662C9.21418 20.6381 8.56109 19.6635 8.10584 18.5933C7.63771 17.526 7.38022 16.3783 7.34752 15.2133C7.34138 14.7444 7.43733 14.2799 7.62871 13.8518C7.82008 13.4238 8.1023 13.0425 8.45578 12.7345C8.80917 12.3856 9.22882 12.1109 9.69 11.9267C10.1512 11.7425 10.6446 11.6525 11.1411 11.6619C11.6371 11.6524 12.13 11.7421 12.5908 11.9259C13.0516 12.1096 13.471 12.3837 13.8244 12.7319C14.1926 13.031 14.4888 13.4091 14.6911 13.8381C14.8934 14.2672 14.9966 14.7363 14.993 15.2107C14.9889 15.5168 15.0491 15.8203 15.1697 16.1017C15.2902 16.3831 15.4685 16.636 15.6929 16.8442C16.2169 17.281 16.8774 17.5202 17.5595 17.5202C18.2416 17.5202 18.9022 17.281 19.4261 16.8442C19.6651 16.6447 19.8571 16.3947 19.9882 16.1123C20.1193 15.8299 20.1863 15.522 20.1844 15.2107C20.1886 14.1062 19.9505 13.0141 19.4869 12.0116C19.0233 11.0091 18.3454 10.1205 17.5011 9.40837C15.7781 7.80363 13.497 6.93455 11.143 6.98603C9.41539 6.96902 7.71769 7.43737 6.24315 8.33776C4.81442 9.14901 3.6571 10.3641 2.91641 11.8307C2.42433 12.8879 2.18473 14.045 2.21653 15.2107C2.2132 16.6951 2.49031 18.1668 3.03328 19.5483C3.06739 19.6225 3.08351 19.7038 3.08032 19.7854C3.07714 19.867 3.05474 19.9468 3.01496 20.0181C2.97517 20.0895 2.91911 20.1504 2.85134 20.196C2.78356 20.2417 2.70598 20.2706 2.6249 20.2806C2.23536 20.3932 1.98258 20.2804 1.86658 19.9424C1.25193 18.4405 0.935065 16.8335 0.933616 15.2107C0.906766 13.8633 1.20708 12.5295 1.8088 11.3236C2.62591 9.63308 3.92478 8.22194 5.54197 7.2678C7.23436 6.25885 9.17079 5.73275 11.1411 5.74662C12.4726 5.71785 13.7968 5.95184 15.0378 6.43522C16.2788 6.9186 17.4124 7.64188 18.3737 8.5637C19.3325 9.38421 20.1006 10.4041 20.6245 11.5521C21.1484 12.7002 21.4154 13.9488 21.4069 15.2107C21.4104 15.6849 21.3072 16.1539 21.1049 16.5829C20.9026 17.0118 20.6064 17.3898 20.2383 17.6889C19.4971 18.3422 18.543 18.7027 17.555 18.7027C16.5669 18.7027 15.6128 18.3422 14.8716 17.6889C14.5184 17.3808 14.2363 16.9996 14.0451 16.5717C13.8538 16.1438 13.7579 15.6794 13.764 15.2107C13.7659 14.8993 13.6989 14.5914 13.5678 14.309C13.4367 14.0266 13.2447 13.7767 13.0057 13.5772C12.7591 13.3369 12.4669 13.1483 12.1464 13.0225C11.8258 12.8968 11.4834 12.8363 11.1391 12.8448C10.7949 12.8363 10.4524 12.8968 10.1319 13.0225C9.81133 13.1483 9.51915 13.3369 9.27254 13.5772C9.0481 13.7853 8.86983 14.0383 8.74928 14.3197C8.62872 14.601 8.56855 14.9046 8.57265 15.2107C8.56185 16.2252 8.76406 17.2307 9.16622 18.1622C9.56839 19.0937 10.1615 19.9304 10.9073 20.6183C12.0499 21.6991 13.459 22.4572 14.9904 22.8153C15.3402 22.853 15.4763 23.0971 15.3988 23.5476C15.3752 23.6819 15.3023 23.8024 15.1945 23.8857C15.0867 23.9691 14.9516 24.0092 14.8158 23.9982ZM11.7247 15.2107C11.7206 15.8884 11.8586 16.5594 12.1299 17.1804C12.4012 17.8014 12.7997 18.3586 13.2998 18.8159C14.3904 19.8303 15.8356 20.3761 17.3245 20.3358C17.5002 20.3259 17.6753 20.3071 17.8491 20.2793C18.0615 20.2467 18.2757 20.2278 18.4905 20.2229C18.6719 20.2199 18.8515 20.2583 19.0158 20.3352C19.1028 20.3461 19.184 20.385 19.2471 20.446C19.3102 20.507 19.3518 20.5868 19.3657 20.6734C19.3929 20.7569 19.4001 20.8455 19.3867 20.9322C19.3733 21.019 19.3397 21.1013 19.2885 21.1726C19.2374 21.2439 19.1702 21.3022 19.0923 21.3427C19.0145 21.3832 18.9282 21.4048 18.8405 21.4058C18.3387 21.4837 17.8316 21.5214 17.3238 21.5188C15.9601 21.5737 14.6135 21.1992 13.4738 20.4481C12.5617 19.9129 11.8066 19.147 11.2844 18.2274C10.7622 17.3078 10.4913 16.2669 10.499 15.2094C10.4883 15.1235 10.4978 15.0364 10.5266 14.9549C10.5554 14.8733 10.6028 14.7996 10.665 14.7395C10.7273 14.6794 10.8026 14.6347 10.8851 14.6087C10.9676 14.5828 11.055 14.5764 11.1404 14.59C11.53 14.5904 11.7247 14.7973 11.7247 15.2107ZM8.39995 23.7729C8.32407 23.7734 8.24885 23.7588 8.17872 23.7298C8.10859 23.7008 8.04496 23.6581 7.99157 23.6041C6.99989 22.665 6.15449 21.5826 5.48353 20.393C4.57063 18.8208 4.10666 17.0283 4.14219 15.2107C4.1375 14.3485 4.31727 13.4953 4.66945 12.7083C5.02162 11.9213 5.53805 11.2188 6.18407 10.6478C7.54615 9.38533 9.34394 8.69898 11.2008 8.7325C13.0414 8.69223 14.8235 9.38059 16.1591 10.6478C16.8194 11.2103 17.3493 11.9098 17.7119 12.6978C18.0745 13.4858 18.2611 14.3433 18.2588 15.2107C18.2588 15.5864 18.0449 15.7742 17.6173 15.7742C17.1897 15.7742 16.9758 15.5864 16.9758 15.2107C16.9839 14.5049 16.8366 13.806 16.5443 13.1635C16.252 12.521 15.8219 11.9507 15.2846 11.4931C14.1829 10.4511 12.7155 9.88442 11.1995 9.91543C9.68422 9.88476 8.21766 10.4512 7.11639 11.4924C6.57906 11.9501 6.14901 12.5204 5.85672 13.1629C5.56444 13.8053 5.41708 14.5042 5.4251 15.21C5.37793 16.8207 5.76045 18.4149 6.53337 19.8288C7.19573 20.8919 7.97872 21.8748 8.86676 22.7582C9.17796 23.0209 9.17796 23.3022 8.86676 23.6022C8.80416 23.6602 8.73065 23.7051 8.65051 23.7345C8.57037 23.7638 8.48519 23.7769 8.39995 23.7729ZM0.641455 9.23956C0.213818 9.23956 0 9.05171 0 8.67602C0.0143278 8.55621 0.0541783 8.44086 0.116864 8.33776C1.31402 6.65024 2.91939 5.2937 4.783 4.39489C6.77626 3.4071 8.97504 2.90518 11.1995 2.93019C13.424 2.90518 15.6227 3.4071 17.616 4.39489C19.4823 5.26375 21.0904 6.60333 22.2821 8.28192C22.3448 8.38503 22.3847 8.50037 22.399 8.62018C22.3957 8.75287 22.3479 8.88059 22.2632 8.98281C22.1785 9.08503 22.0619 9.15579 21.9322 9.18373C21.8715 9.21496 21.8052 9.2339 21.7371 9.23948C21.669 9.24506 21.6005 9.23716 21.5355 9.21623C21.4705 9.19531 21.4103 9.16177 21.3582 9.11753C21.3062 9.07329 21.2634 9.01923 21.2323 8.95844C20.1324 7.47508 18.6919 6.27798 17.0323 5.46809C15.2124 4.59632 13.2173 4.15217 11.1995 4.1696C9.17796 4.11547 7.17434 4.56151 5.36667 5.46809C3.67638 6.28191 2.2135 7.50101 1.10826 9.01687C1.05403 9.08872 0.983305 9.14647 0.902056 9.18523C0.820808 9.22399 0.731424 9.24262 0.641455 9.23956ZM18.4308 2.93084C18.3301 2.94363 18.2279 2.92383 18.1393 2.87435C15.9878 1.78179 13.6124 1.20287 11.1995 1.18306C8.78098 1.15587 6.39433 1.73629 4.25841 2.8711C4.16954 2.92211 4.06882 2.94885 3.96635 2.94864C3.86389 2.94843 3.76328 2.92128 3.67462 2.86991C3.58595 2.81855 3.51236 2.74477 3.46122 2.65598C3.41007 2.56719 3.38317 2.46651 3.38322 2.36404C3.37413 2.25223 3.39663 2.14011 3.44817 2.04047C3.49972 1.94083 3.57822 1.85768 3.67473 1.8005C5.99436 0.584418 8.58067 -0.033929 11.1995 0.00143601C13.8123 0.0213925 16.386 0.637837 18.7243 1.80374C18.8004 1.82991 18.8692 1.87389 18.9249 1.93202C18.9805 1.99015 19.0215 2.06075 19.0444 2.13793C19.0673 2.21512 19.0714 2.29665 19.0563 2.37573C19.0413 2.45482 19.0076 2.52916 18.958 2.59258C18.9059 2.68846 18.8304 2.76966 18.7386 2.82867C18.6468 2.88768 18.5416 2.92259 18.4328 2.93019L18.4308 2.93084Z"
      fill="white"
      stroke="white"
      stroke-width="2"
      mask="url(#path-1-inside-1_152_127)"
    />
  </Svg>
);

export default TouchIcon;