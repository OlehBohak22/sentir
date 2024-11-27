import s from "./SentirLogo.module.css";

export const SentirLogo = () => {
  return (
    <div>
      <svg
        className={s.logo}
        viewBox="0 0 34 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.1265 12.1755C33.274 14.2664 32.8315 16.3241 31.9464 18.249C31.5039 19.7425 30.8402 21.2028 29.9182 22.5303C29.2176 23.4928 28.4432 24.3889 27.5582 25.1522C26.3781 26.6789 24.8662 28.0064 22.9855 28.8362C21.0311 29.6991 18.8185 30.0309 16.6428 29.9977C14.1721 29.9314 11.7752 29.3672 9.56262 28.3715C9.42885 28.3314 9.29509 28.2943 9.16234 28.2575C8.85594 28.1725 8.55497 28.089 8.27195 27.9733C6.5019 27.3427 4.91622 26.3802 3.66244 25.0858C2.37177 23.7583 1.52362 22.1321 1.11798 20.4395C1.11798 20.3731 1.11798 20.3067 1.08111 20.2403C0.74922 19.477 0.491087 18.6805 0.306707 17.8839C-0.430816 14.6315 0.196078 11.1799 1.81863 8.19289C3.44118 5.20592 6.09626 2.6504 9.41511 1.19011C9.63637 1.09054 9.85763 1.32286 9.747 1.4888C11.6277 0.659091 13.6927 0.128075 15.8316 0.0285094C19.8142 -0.20381 23.7231 0.990977 26.7469 3.34736C26.8207 3.38055 26.8944 3.44693 26.9682 3.51331C28.2588 4.37621 29.402 5.37186 30.4345 6.46708C31.172 7.26361 31.8358 8.12651 32.3152 9.05579C32.7946 10.0514 33.0527 11.0803 33.1265 12.1755ZM1.44987 19.4438C2.37177 21.8002 3.99432 23.8911 6.05938 25.5505C7.38693 26.6125 8.93572 27.4754 10.5952 28.106C11.0377 28.2056 11.4802 28.2719 11.9227 28.3383C10.8164 28.0396 9.78387 27.6082 8.78822 27.044C6.90754 25.9819 5.35874 24.5548 4.21558 22.8622C3.62556 22.0989 3.10929 21.3024 2.70366 20.4395C2.07676 19.3774 1.59737 18.2158 1.30236 17.021C1.26549 17.8507 1.33924 18.6473 1.44987 19.4438ZM29.8445 7.99376C30.1026 8.32564 30.3608 8.65753 30.582 9.0226C29.697 7.23042 28.4432 5.60418 26.8944 4.21026C26.7285 4.1107 26.5625 4.00284 26.3966 3.89498C26.2306 3.78711 26.0647 3.67925 25.8987 3.57968C25.1612 3.14823 24.4237 2.74997 23.6124 2.38489C24.1593 2.69573 24.6612 3.04699 25.1532 3.40713C26.5842 4.20018 27.8672 5.20115 28.9104 6.38897C29.0258 6.51802 28.921 6.69017 28.7777 6.71648C29.1499 7.13309 29.5058 7.55957 29.8445 7.99376ZM20.2821 1.62507C19.5295 1.35977 18.7544 1.15545 17.9704 1.02417C17.0116 0.990977 16.0528 1.02417 15.1309 1.2233C14.8513 1.27362 14.5771 1.33825 14.3101 1.41538C16.285 1.14352 18.3275 1.22529 20.2821 1.62507ZM10.9108 2.2755C11.6088 1.87337 12.3394 1.50236 13.1027 1.19011C10.8164 1.72112 8.64071 2.78316 6.87066 4.21026C7.93808 3.43553 9.1984 2.86334 10.5015 2.43967C10.5783 2.4075 10.6552 2.37594 10.7322 2.34501C10.7916 2.32144 10.8511 2.29828 10.9108 2.2755ZM17.8966 28.2719C18.4498 28.1724 18.966 28.0728 19.4823 27.9733C19.7556 27.9193 20.0265 27.8598 20.2948 27.795C19.44 27.8641 18.5797 27.8586 17.7229 27.7853C14.3231 27.9986 10.8621 27.2431 7.97694 25.6169L7.97686 25.6168C7.645 25.4177 7.31315 25.2186 7.01816 25.0195C9.52574 26.9444 12.7708 28.1392 16.0528 28.3051C16.6623 28.3374 17.2368 28.3069 17.8443 28.2747L17.8966 28.2719ZM21.9102 26.9941C23.4198 26.5006 24.8511 25.795 26.1569 24.9199L26.12 24.9531C25.6684 25.3392 25.2029 25.6881 24.7151 26.0072C24.7082 26.0111 24.7012 26.0151 24.6942 26.019C23.8679 26.5027 22.9017 26.7911 21.9102 26.9941ZM30.0419 18.8416C29.8467 19.5928 29.567 20.3246 29.2122 21.0285C28.1539 22.4776 26.8277 23.7451 25.2804 24.7655C25.597 24.5189 25.8738 24.2493 26.1506 23.9796C27.451 22.7095 28.6107 21.2822 29.5391 19.7463L29.5391 19.7462C29.7102 19.4467 29.8813 19.1471 30.0419 18.8416ZM30.3631 16.0693C30.2681 16.4159 30.1557 16.7589 30.0272 17.0962C30.1989 16.1085 30.2258 15.0876 30.1292 14.1217C30.1173 13.9565 30.1027 13.7915 30.0852 13.6268C30.246 14.4065 30.3473 15.1949 30.3608 15.9922C30.3617 16.0179 30.3624 16.0436 30.3631 16.0693ZM29.7503 10.526C30.1485 11.6802 30.4939 12.8426 30.7084 14.0283C30.7261 13.7432 30.7306 13.4584 30.7211 13.1748C30.5691 12.4044 30.3518 11.6467 29.9784 10.9504C29.9082 10.8055 29.8319 10.6639 29.7503 10.526ZM2.94844 18.882C3.28341 19.8401 3.75793 20.7648 4.37229 21.5944C4.88345 22.2946 5.51101 22.9104 6.22232 23.4483C5.32784 22.5769 4.57531 21.5855 4.00449 20.4969C3.30446 19.1566 2.85855 17.7358 2.67386 16.2639C2.60894 16.0525 2.55472 15.839 2.50685 15.6243C2.49189 16.4904 2.58386 17.3623 2.77741 18.2158C2.82852 18.4381 2.88552 18.6605 2.94844 18.882ZM27.5397 6.63303C27.5333 6.62342 27.5269 6.61381 27.5204 6.60411C26.8931 5.98872 26.1969 5.42962 25.449 4.94284C26.4855 5.69406 27.336 6.66635 28.0303 7.69998C28.0826 7.74654 28.1346 7.79341 28.1864 7.84059C28.0261 7.47257 27.8455 7.11175 27.6319 6.76578C27.5951 6.716 27.5674 6.67451 27.5397 6.63303ZM28.8791 8.17345C28.9059 8.24289 28.9327 8.30916 28.9595 8.37543C28.9963 8.46669 29.0332 8.55796 29.0701 8.65753C29.0803 8.68455 29.0904 8.71157 29.1006 8.7386C29.2799 8.9301 29.4537 9.12638 29.6205 9.32769C29.399 8.93204 29.151 8.54647 28.8791 8.17345ZM8.40901 4.17285C7.96018 4.57477 7.52605 4.98991 7.09192 5.40505C6.17001 6.16839 5.32186 6.9981 4.65809 7.96057C4.58434 8.06013 4.62122 8.1597 4.69497 8.22608C4.67653 8.25926 4.65809 8.28415 4.63965 8.30905C4.62122 8.33394 4.60278 8.35883 4.58434 8.39202C4.06324 9.11016 3.59248 9.86065 3.19746 10.6406C3.48789 9.86346 3.85516 9.11295 4.29729 8.40573C5.3322 6.75884 6.72505 5.30126 8.40901 4.17285ZM10.4932 3.24306C10.6625 3.19899 10.8333 3.15746 11.0058 3.11901C10.7165 3.23365 10.4319 3.35445 10.1526 3.48012C10.2662 3.40066 10.3797 3.3212 10.4932 3.24306ZM32.4627 13.4367V12.972C32.4627 11.91 32.3521 10.848 31.9464 9.8855C31.6146 9.05579 31.1352 8.32564 30.5451 7.62868C31.4302 9.08898 32.0202 10.7152 32.3152 12.3415C32.3521 12.6402 32.389 12.972 32.4258 13.3039C32.4627 13.3371 32.4627 13.4035 32.4627 13.4367ZM7.31317 2.88272C5.32186 4.21026 3.69931 5.96926 2.55615 7.96057C0.970477 10.7152 0.26983 13.9013 0.712344 16.9878C0.74922 16.2909 0.822973 15.5607 0.933601 14.8638C0.822973 11.91 1.81863 8.98941 3.66244 6.56665L3.66244 6.56665C3.73619 6.50027 3.77306 6.46708 3.80994 6.40071C4.21558 5.80331 4.69497 5.23911 5.21123 4.6749C5.83813 4.01113 6.53877 3.41374 7.31317 2.88272ZM2.6299 22.8622C2.96179 23.4264 3.33055 23.9906 3.80994 24.5216C4.62122 25.4177 5.58 26.1811 6.68628 26.7453C6.5941 26.6789 6.51114 26.6208 6.42817 26.5628C6.34519 26.5047 6.26221 26.4466 6.17001 26.3802C4.8056 25.3845 3.58868 24.1898 2.6299 22.8622ZM15.9053 29.334C17.8966 29.4667 19.9986 29.2344 21.8792 28.5706C22.838 28.2388 23.7231 27.7741 24.5343 27.2099C23.2805 27.8737 21.9161 28.3715 20.478 28.6702C18.7079 29.0353 16.901 29.1348 15.094 28.9689C14.4303 29.0021 13.7665 28.9689 13.1028 28.9357H13.1027C14.0246 29.1348 14.9465 29.2676 15.9053 29.334ZM3.89925 18.3631C4.10372 18.7847 4.30109 19.177 4.49846 19.5692C5.08348 20.7166 5.81756 21.7732 6.6936 22.7097C7.31406 23.2961 7.98562 23.811 8.74804 24.2773L8.78779 24.3003C7.3112 23.1428 6.08588 21.7515 5.23108 20.1952C3.50729 17.0241 3.2798 13.2522 4.60124 9.94665L4.60128 9.94656C4.73327 9.64376 4.86526 9.34096 5.00435 9.06754C3.59339 11.4366 3.0428 14.2527 3.51153 16.9001C3.59715 17.392 3.73777 17.844 3.88645 18.3219L3.89925 18.3631ZM24.6314 6.08774C23.5651 5.49623 22.4151 4.98267 21.2864 4.55726C19.5245 3.91725 17.6349 3.45613 15.7211 3.46138C14.0757 3.44489 12.4104 3.77083 10.8815 4.37786C9.97716 4.73952 9.09415 5.18935 8.29775 5.71455C7.02722 6.82499 6.01652 8.16156 5.34229 9.61694C3.88029 12.7654 3.95586 16.4746 5.52774 19.5832C6.88805 22.2408 9.28753 24.3872 12.1441 25.7362C14.1601 26.2957 16.3053 26.3991 18.3808 25.9313C20.5288 25.4801 22.4836 24.5127 24.3589 23.4993C24.3968 23.4801 24.4346 23.4608 24.4725 23.4415C25.3201 23.0102 26.1908 22.567 26.9327 21.9799C26.9746 21.941 27.0101 21.9109 27.0456 21.8809C27.0811 21.8509 27.1166 21.8208 27.1584 21.7819C27.7859 20.982 28.294 20.1131 28.6901 19.2046C29.8823 16.3552 29.7713 13.2069 28.35 10.4381C27.4994 8.75798 26.213 7.25547 24.6314 6.08774ZM28.5108 9.74095C28.4367 9.56031 28.3547 9.36046 28.2476 9.16552C28.1222 8.87165 27.9599 8.6045 27.7829 8.31317C27.7375 8.23843 27.6911 8.16211 27.6442 8.08333C27.3843 7.85719 27.0919 7.63744 26.7994 7.41769C27.4553 8.15106 28.0602 8.95599 28.5416 9.81586C28.5314 9.79132 28.5212 9.76632 28.5108 9.74095ZM19.2312 26.1957C17.9791 26.5331 16.717 26.6878 15.445 26.6598C15.5337 26.6732 15.6143 26.6882 15.6948 26.7032C15.7754 26.7182 15.856 26.7332 15.9447 26.7467C18.0899 26.85 20.2591 26.487 22.2097 25.6435C23.5683 25.0391 24.8048 24.2123 25.861 23.2054C25.7701 23.2539 25.6874 23.3009 25.6047 23.3478C25.522 23.3948 25.4393 23.4418 25.3485 23.4903C23.3823 24.5523 21.409 25.5848 19.2312 26.1957ZM26.5423 6.63702C26.0198 6.03142 25.4462 5.49737 24.7562 5.04766C23.203 3.99748 21.292 3.4482 19.391 3.08163C18.2794 2.86833 17.084 2.73298 15.9099 2.68578C15.3804 2.75865 14.8182 2.83791 14.2957 2.94017C13.932 3.01136 13.5463 3.11337 13.1329 3.2227C13.1009 3.23116 13.0688 3.23966 13.0365 3.24819C13.7548 3.10759 14.4476 3.00277 15.1617 2.9861C17.1266 2.9093 19.0674 3.29886 20.8946 3.9261C20.9308 3.9344 20.9588 3.9443 20.9868 3.9542C21.0149 3.9641 21.0429 3.974 21.0791 3.9823C21.1302 3.91075 21.2211 3.86219 21.3332 3.90179C22.408 4.24542 23.3876 4.76155 24.3162 5.34924C24.9849 5.71078 25.6536 6.07233 26.2967 6.46966C26.3833 6.54503 26.4628 6.59102 26.5423 6.63701L26.5423 6.63702ZM20.3961 2.85412C21.008 2.98057 21.6668 3.1594 22.2603 3.35102C21.9854 3.24742 21.6969 3.16293 21.4174 3.08108C21.3144 3.0509 21.2126 3.02107 21.1131 2.99078C20.9882 2.96907 20.8714 2.94576 20.7546 2.92245C20.6379 2.89914 20.5211 2.87583 20.3961 2.85412Z"
        />
      </svg>
    </div>
  );
};
