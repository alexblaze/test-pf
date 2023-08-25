import React from "react";
import ServiceCard from "../card/ServiceCard";

const Services = () => {
  const serviceData = [
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_226_1099)">
            <rect
              x="20"
              y="10.0005"
              width="50"
              height="50"
              rx="15"
              fill="#FFE7DB"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.5522 23.3345H50.4477C54.4155 23.3345 56.6555 25.585 56.6672 29.5528V40.4495C56.6672 44.4161 54.4155 46.6678 50.4477 46.6678H39.5522C35.5844 46.6678 33.3339 44.4161 33.3339 40.4495V29.5528C33.3339 25.585 35.5844 23.3345 39.5522 23.3345ZM45.0577 41.8378C45.5605 41.8378 45.9793 41.4645 46.026 40.9628V29.0745C46.0727 28.7128 45.8988 28.35 45.5838 28.1528C45.256 27.9545 44.8593 27.9545 44.5455 28.1528C44.2293 28.35 44.0555 28.7128 44.0893 29.0745V40.9628C44.1488 41.4645 44.5677 41.8378 45.0577 41.8378ZM50.4255 41.8378C50.9155 41.8378 51.3343 41.4645 51.3938 40.9628V37.1362C51.4277 36.7617 51.2538 36.4128 50.9377 36.2145C50.6238 36.0162 50.2272 36.0162 49.9005 36.2145C49.5843 36.4128 49.4105 36.7617 49.4572 37.1362V40.9628C49.5038 41.4645 49.9227 41.8378 50.4255 41.8378ZM40.5894 40.9628C40.5427 41.4645 40.1239 41.8378 39.621 41.8378C39.1194 41.8378 38.6994 41.4645 38.6539 40.9628V32.9012C38.6189 32.5383 38.7927 32.1778 39.1089 31.9795C39.4227 31.7812 39.8205 31.7812 40.1355 31.9795C40.4494 32.1778 40.6255 32.5383 40.5894 32.9012V40.9628Z"
            fill="#FEAD86"
          />
          <defs>
            <filter
              id="filter0_d_226_1099"
              x="0"
              y="0.000488281"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.770833 0 0 0 0 0.619075 0 0 0 0 0.56849 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_226_1099"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_226_1099"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Grow your business",
      description: (
        <div>
          <b> The magic wand </b>for success is in figuring out how to bring in
          the profits and ensure the capacity needed to sustain that growth for
          posterity.
        </div>
      ),
    },
    {
      icon: (
        <svg
          width="90"
          height="91"
          viewBox="0 0 90 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_228_1100)">
            <rect
              x="19.9995"
              y="10.0015"
              width="50"
              height="50"
              rx="15"
              fill="#E7F2EF"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.799 31.6707L55.6393 32.5107C56.3045 33.1641 56.6663 34.0507 56.6663 34.9841C56.678 35.9174 56.3162 36.8052 55.6626 37.4691C55.6548 37.4776 55.6471 37.4852 55.6393 37.4927C55.6354 37.4964 55.6315 37.5002 55.6276 37.5041L54.799 38.3324C54.4722 38.6591 54.2854 39.1024 54.2854 39.5702V40.7707C54.2854 42.7074 52.7099 44.2836 50.7725 44.2836H49.5704C49.1036 44.2836 48.6601 44.4691 48.3333 44.7957L47.493 45.6357C46.8044 46.3252 45.9057 46.6624 45.0071 46.6624C44.1084 46.6624 43.2098 46.3252 42.5212 45.6486L41.6692 44.7957C41.3424 44.4691 40.8989 44.2836 40.4321 44.2836H39.23C37.2926 44.2836 35.7171 42.7074 35.7171 40.7707V39.5702C35.7171 39.1024 35.5303 38.6591 35.2035 38.3207L34.3632 37.4924C32.9977 36.1286 32.9861 33.8991 34.3516 32.5236L35.2035 31.6707C35.5303 31.3441 35.7171 30.9007 35.7171 30.4224V29.2324C35.7171 27.2957 37.2926 25.7219 39.23 25.7219H40.4321C40.8989 25.7219 41.3424 25.5341 41.6692 25.2074L42.5095 24.3674C43.875 22.9919 46.1041 22.9919 47.4813 24.3569L48.3333 25.2074C48.6601 25.5341 49.1036 25.7219 49.5704 25.7219H50.7725C52.7099 25.7219 54.2854 27.2957 54.2854 29.2324V30.4352C54.2854 30.9007 54.4722 31.3441 54.799 31.6707ZM41.996 39.0208C42.2761 39.0208 42.5329 38.9158 42.7196 38.7174L48.7185 32.7219C49.1153 32.3253 49.1153 31.6708 48.7185 31.2741C48.3216 30.8786 47.6797 30.8786 47.2829 31.2741L41.2841 37.2708C40.8873 37.6674 40.8873 38.3208 41.2841 38.7174C41.4708 38.9158 41.7276 39.0208 41.996 39.0208ZM46.9795 37.9941C46.9795 38.5657 47.4346 39.0207 48.0065 39.0207C48.5667 39.0207 49.0219 38.5657 49.0219 37.9941C49.0219 37.4352 48.5667 36.9791 48.0065 36.9791C47.4346 36.9791 46.9795 37.4352 46.9795 37.9941ZM42.0076 30.9824C42.5678 30.9824 43.023 31.4374 43.023 31.9974C43.023 32.5702 42.5678 33.024 42.0076 33.024C41.4474 33.024 40.9806 32.5702 40.9806 31.9974C40.9806 31.4374 41.4474 30.9824 42.0076 30.9824Z"
            fill="#51A690"
          />
          <defs>
            <filter
              id="filter0_d_228_1100"
              x="-0.000488281"
              y="0.00146484"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0235294 0 0 0 0 0.301961 0 0 0 0 0.227451 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_228_1100"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_228_1100"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Drive more sales",
      description: (
        <div>
          A potential customer, once lost, is hard to retain back. But
          <b> keeping some critical </b>factors in mind, we can, for sure, use
          these loyalty programs as customer retention tools.
        </div>
      ),
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_228_1101)">
            <rect
              x="20"
              y="10.0005"
              width="50"
              height="50"
              rx="15"
              fill="#FAF3D8"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.8515 30.6053C49.8515 33.3466 47.6661 35.5447 44.9406 35.5447C42.2152 35.5447 40.0298 33.3466 40.0298 30.6053C40.0298 27.863 42.2152 25.667 44.9406 25.667C47.6661 25.667 49.8515 27.863 49.8515 30.6053ZM44.9406 44.3336C40.9375 44.3336 37.5195 43.699 37.5195 41.1605C37.5195 38.6209 40.9156 37.9632 44.9406 37.9632C48.9436 37.9632 52.3617 38.5978 52.3617 41.1374C52.3617 43.6759 48.9656 44.3336 44.9406 44.3336ZM51.9501 30.6944C51.9501 32.0919 51.5332 33.3937 50.802 34.4759C50.7268 34.5873 50.7936 34.7376 50.9263 34.7607C51.1091 34.7922 51.2982 34.8101 51.4904 34.8153C53.4073 34.8658 55.1278 33.6249 55.6031 31.7567C56.3072 28.9818 54.2399 26.4906 51.6074 26.4906C51.3212 26.4906 51.0475 26.521 50.7811 26.5757C50.7445 26.5841 50.7059 26.6009 50.685 26.6335C50.6599 26.6734 50.6787 26.727 50.7038 26.7616C51.4946 27.8764 51.9501 29.2361 51.9501 30.6944ZM55.1247 36.765C56.4127 37.0182 57.2599 37.5351 57.6109 38.2864C57.9076 38.9032 57.9076 39.6187 57.6109 40.2344C57.074 41.3996 55.343 41.7737 54.6703 41.8704C54.5313 41.8914 54.4196 41.7705 54.4342 41.6308C54.7779 38.402 52.0441 36.8711 51.3368 36.5191C51.3065 36.5033 51.3003 36.4792 51.3034 36.4645C51.3055 36.454 51.318 36.4372 51.341 36.434C52.8714 36.4056 54.5167 36.6158 55.1247 36.765ZM38.5101 34.8152C38.7023 34.8099 38.8903 34.7931 39.0742 34.7605C39.2068 34.7374 39.2737 34.5871 39.1985 34.4758C38.4672 33.3935 38.0504 32.0917 38.0504 30.6943C38.0504 29.2359 38.5059 27.8763 39.2967 26.7615C39.3217 26.7268 39.3395 26.6732 39.3155 26.6333C39.2946 26.6018 39.2549 26.5839 39.2194 26.5755C38.9519 26.5209 38.6782 26.4904 38.392 26.4904C35.7595 26.4904 33.6922 28.9816 34.3973 31.7565C34.8726 33.6247 36.5931 34.8656 38.5101 34.8152ZM38.6965 36.4639C38.6996 36.4796 38.6934 36.5027 38.6641 36.5196C37.9559 36.8715 35.222 38.4024 35.5657 41.6302C35.5804 41.771 35.4696 41.8908 35.3307 41.8708C34.6579 41.7741 32.927 41.4001 32.39 40.2349C32.0923 39.6181 32.0923 38.9036 32.39 38.2868C32.741 37.5356 33.5872 37.0186 34.8752 36.7644C35.4843 36.6162 37.1285 36.4061 38.6599 36.4344C38.6829 36.4376 38.6944 36.4544 38.6965 36.4639Z"
            fill="#FFCF00"
          />
          <defs>
            <filter
              id="filter0_d_228_1101"
              x="0"
              y="0.000488281"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.745833 0 0 0 0 0.649564 0 0 0 0 0.450608 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_228_1101"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_228_1101"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Handle by Expert",
      description: (
        <div>
          We know how we candevelop deep, trust-based relationships with our
          clients, and work together more collaboratively
        </div>
      ),
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_230_1102)">
            <rect x="20" y="10" width="50" height="50" rx="15" fill="#C0F2EF" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.3334 33.4484C33.3334 27.8621 37.8138 23.3335 43.3406 23.3335C45.9947 23.3335 48.5401 24.3992 50.4168 26.2961C52.2935 28.193 53.3479 30.7658 53.3479 33.4484C53.3479 39.0347 48.8675 43.5633 43.3406 43.5633C37.8138 43.5633 33.3334 39.0347 33.3334 33.4484ZM53.1823 41.5968L56.1627 44.0026H56.2145C56.8174 44.6121 56.8174 45.6002 56.2145 46.2097C55.6115 46.8192 54.6339 46.8192 54.0309 46.2097L51.5575 43.375C51.3237 43.1395 51.1923 42.8196 51.1923 42.4859C51.1923 42.1522 51.3237 41.8323 51.5575 41.5968C52.0085 41.1489 52.7313 41.1489 53.1823 41.5968Z"
            fill="#00A198"
          />
          <defs>
            <filter
              id="filter0_d_230_1102"
              x="0"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.770833 0 0 0 0 0.619075 0 0 0 0 0.56849 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_230_1102"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_230_1102"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "UX Research",
      description: (
        <div>
          UX research is the systematic study of target users and their
          requirements, to add realistic contexts and insights to design
          processes.
        </div>
      ),
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_230_1103)">
            <rect x="20" y="10" width="50" height="50" rx="15" fill="#EDE7F2" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.3809 23.5781C45.5672 23.4109 45.8136 23.3232 46.0659 23.3345C51.3985 23.4941 55.8552 27.3653 56.6629 32.5392C56.668 32.5701 56.668 32.6016 56.6629 32.6325C56.6803 32.8773 56.5976 33.1188 56.433 33.3037C56.2684 33.4885 56.0356 33.6013 55.786 33.6173L46.8266 34.2081C46.5303 34.2344 46.2364 34.1369 46.0172 33.9396C45.798 33.7423 45.6737 33.4634 45.675 33.1715L45.0727 24.371V24.2259C45.0837 23.9784 45.1946 23.7453 45.3809 23.5781ZM44.7663 36.5093L52.5318 36.0118L52.5846 36.0325C52.9181 36.0379 53.2357 36.1732 53.4675 36.4084C53.6994 36.6436 53.8264 36.9596 53.8208 37.2867C53.5148 41.7459 50.2456 45.4716 45.7966 46.4314C41.3476 47.3913 36.7869 45.3548 34.6025 41.433C33.9601 40.3035 33.5542 39.0595 33.4086 37.7739C33.3521 37.393 33.3273 37.0082 33.3346 36.6233C33.3493 31.8817 36.7252 27.7891 41.4488 26.7863C42.0206 26.6792 42.5939 26.9647 42.8434 27.4808C42.9055 27.5744 42.9552 27.6754 42.9913 27.7814C43.0799 29.1483 43.1717 30.5022 43.2632 31.8505C43.3354 32.9151 43.4074 33.9763 43.4773 35.0374C43.4737 35.2874 43.513 35.5362 43.5935 35.7733C43.7831 36.24 44.255 36.5361 44.7663 36.5093Z"
            fill="#75578E"
          />
          <defs>
            <filter
              id="filter0_d_230_1103"
              x="0"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0235294 0 0 0 0 0.301961 0 0 0 0 0.227451 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_230_1103"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_230_1103"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Business Audit",
      description: (
        <div>
          An audit examines your business's financial records to verify they are
          accurate. This is done through a systematic review of your
          transactions.{" "}
        </div>
      ),
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_230_1104)">
            <rect x="20" y="10" width="50" height="50" rx="15" fill="#D8F0FA" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.1549 28.5485H50.3938C53.5345 28.5485 56.0834 31.1735 56.0834 34.3935V40.8335C56.0834 44.0535 53.5345 46.6668 50.3938 46.6668H39.6063C36.4657 46.6668 33.9167 44.0535 33.9167 40.8335V34.3935C33.9167 31.1735 36.4657 28.5485 39.6063 28.5485H39.8453C39.8681 27.1485 40.4029 25.8418 41.3701 24.8618C42.3487 23.8702 43.6004 23.3685 45.0115 23.3335C47.8335 23.3335 50.1207 25.6668 50.1549 28.5485ZM42.5649 26.1102C41.9277 26.7635 41.5749 27.6268 41.5522 28.5485H48.4479C48.4138 26.6352 46.889 25.0835 45.0114 25.0835C44.1352 25.0835 43.2249 25.4452 42.5649 26.1102ZM49.3241 33.0402C49.8021 33.0402 50.1776 32.6435 50.1776 32.1652V30.8119C50.1776 30.3335 49.8021 29.9369 49.3241 29.9369C48.8576 29.9369 48.4707 30.3335 48.4707 30.8119V32.1652C48.4707 32.6435 48.8576 33.0402 49.3241 33.0402ZM41.427 32.1652C41.427 32.6435 41.0515 33.0402 40.5735 33.0402C40.107 33.0402 39.7201 32.6435 39.7201 32.1652V30.8119C39.7201 30.3335 40.107 29.9369 40.5735 29.9369C41.0515 29.9369 41.427 30.3335 41.427 30.8119V32.1652Z"
            fill="#0985B9"
          />
          <defs>
            <filter
              id="filter0_d_230_1104"
              x="0"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.745833 0 0 0 0 0.649564 0 0 0 0 0.450608 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_230_1104"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_230_1104"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Data tracking",
      description: (
        <div>
          The hardware and software, which when used together allows you to know
          where something is at any point in time
        </div>
      ),
    },
  ];
  return (
    <section>
      <h1 className="heading max-w-[526px] mb-1">
        We are here to help you with
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((item) => {
          return (
            <div className="">
              <ServiceCard
                title={item?.title}
                description={item?.description}
                icon={item?.icon}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
