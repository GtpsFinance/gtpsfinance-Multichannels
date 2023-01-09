import useTheme from 'hooks/useTheme'

function Okex({ width, height }: { width?: number; height?: number }) {
  const theme = useTheme()

  return (
    <svg width={width || 160} height={height || 55} viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.8049 25.603C33.2652 25.603 37.6778 21.1905 37.6778 15.7302C37.6778 10.27 33.2652 5.85742 27.8049 5.85742C22.3447 5.85742 17.9321 10.27 17.9321 15.7302C17.9523 21.1905 22.3648 25.603 27.8049 25.603Z"
        fill="#88BDF3"
      />
      <path
        d="M27.8049 49.4385C33.2652 49.4385 37.6778 45.026 37.6778 39.5657C37.6778 34.1054 33.2652 29.6929 27.8049 29.6929C22.3447 29.6929 17.9321 34.1054 17.9321 39.5657C17.9523 45.026 22.3648 49.4385 27.8049 49.4385Z"
        fill="#3075EE"
      />
      <path
        d="M39.733 37.5311C45.1933 37.5311 49.6058 33.1186 49.6058 27.6785C49.6058 22.2182 45.1933 17.8057 39.7532 17.8057C34.2929 17.8057 29.8804 22.2182 29.8804 27.6583C29.8804 33.0984 34.2929 37.5311 39.733 37.5311Z"
        fill="#5795F1"
      />
      <path
        d="M15.8972 37.5311C21.3574 37.5311 25.77 33.1186 25.77 27.6785C25.77 22.2182 21.3574 17.8057 15.9173 17.8057C10.4772 17.8057 6.0445 22.2182 6.0445 27.6583C6.02435 33.0984 10.457 37.5311 15.8972 37.5311Z"
        fill="#205FEC"
      />
      <path
        d="M18.2344 18.0674C21.8208 18.9338 24.6215 21.7344 25.4879 25.3209C22.0223 24.4746 19.3023 21.8352 18.3351 18.4099L18.2344 18.0674Z"
        fill="#134BEF"
      />
      <path
        d="M25.4879 29.9951C24.6215 33.5816 21.8208 36.3822 18.2344 37.2486C19.0806 33.7831 21.7201 31.0428 25.1453 30.0757L25.4879 29.9951Z"
        fill="#0932E8"
      />
      <path
        d="M30.1421 29.9951C33.7285 30.8615 36.5292 33.6622 37.3956 37.2486C33.93 36.4024 31.21 33.7629 30.2227 30.3376L30.1421 29.9951Z"
        fill="#164BEA"
      />
      <path
        d="M37.3956 18.0674C36.5292 21.6538 33.7285 24.4545 30.1421 25.3209C30.9883 21.8553 33.6278 19.1353 37.0531 18.1681L37.3956 18.0674Z"
        fill="#3170F1"
      />
      <path
        d="M67.4777 13.4534C69.8351 13.3325 72.2529 13.675 74.3886 14.6825C76.202 15.4884 77.7736 16.7376 79.0027 18.2891C81.6623 21.674 82.5085 26.2276 81.8235 30.4185C81.2795 33.7833 79.5668 37.0273 76.8266 39.1026C74.973 40.513 72.7566 41.3995 70.4395 41.6816C68.062 41.9637 65.6039 41.8226 63.3271 41.0368C61.6749 40.4727 60.1637 39.566 58.8742 38.4175C57.4638 37.128 56.3556 35.5363 55.6504 33.7632C54.6833 31.2849 54.3206 28.6051 54.5826 25.9657C54.8445 23.2053 55.7915 20.4651 57.5444 18.2891C59.0556 16.4152 61.0704 15.025 63.3472 14.2392C64.6972 13.7556 66.0874 13.4937 67.4777 13.4534ZM66.9538 18.0473C65.6039 18.2286 64.3143 18.7928 63.2666 19.6793C61.8562 20.8882 60.9898 22.621 60.607 24.4142C60.1234 26.6507 60.1637 28.9477 60.6876 31.164C61.151 33.0781 62.2189 34.9318 63.8912 36.04C65.3419 37.0474 67.1553 37.3698 68.8881 37.269C70.641 37.2086 72.3133 36.5034 73.5827 35.2945C75.0938 33.8639 75.8595 31.8289 76.1416 29.8141C76.4438 27.5977 76.3229 25.3209 75.6177 23.1852C75.0133 21.3718 73.7842 19.7398 72.0917 18.8331C70.5604 17.9868 68.7067 17.8256 66.9538 18.0473Z"
        fill={theme.text}
      />
      <path
        d="M85.6719 13.9367C87.586 13.8964 89.5203 13.9367 91.4344 13.9165C91.4344 18.3089 91.4344 22.6811 91.4344 27.0735C94.5977 22.6811 97.7812 18.3089 100.945 13.9165H107.594C104.229 18.4298 100.884 22.9431 97.5193 27.4362C101.106 32.0502 104.692 36.6643 108.279 41.2783H101.166C97.9222 36.8053 94.6783 32.3323 91.4344 27.8392C91.4344 32.3122 91.4344 36.7852 91.4344 41.2783H85.6719C85.6719 32.1913 85.692 23.064 85.6719 13.9367Z"
        fill={theme.text}
      />
      <path
        d="M110.555 41.2984C110.555 32.1711 110.555 23.0438 110.555 13.9165C116.036 13.9165 121.516 13.9165 126.976 13.9165C127.017 15.4276 126.976 16.9589 126.996 18.4902C123.43 18.4902 119.884 18.4902 116.318 18.4902C116.298 20.7066 116.318 22.9028 116.318 25.1191C119.723 25.1191 123.108 25.099 126.513 25.1191C126.513 26.6303 126.513 28.1616 126.513 29.6727C123.108 29.6727 119.723 29.6727 116.318 29.6727C116.318 32.0301 116.318 34.3875 116.318 36.7449C119.924 36.7449 123.531 36.7449 127.117 36.7449C127.117 38.256 127.117 39.7873 127.117 41.2984C121.597 41.3186 116.076 41.3186 110.555 41.2984Z"
        fill={theme.text}
      />
      <path
        d="M129.676 13.937H135.922C137.857 17.0197 139.791 20.1025 141.725 23.1852C143.659 20.1025 145.594 17.0197 147.528 13.937H153.774C150.772 18.4704 147.77 23.0039 144.768 27.5373C147.145 31.1842 149.583 34.7707 151.981 38.3974C152.646 39.3645 153.27 40.3921 153.955 41.3391C151.84 41.319 149.744 41.3391 147.629 41.319C145.654 38.2161 143.679 35.093 141.705 31.9902C139.73 35.093 137.756 38.2161 135.781 41.319H129.495C132.557 36.7452 135.6 32.1513 138.662 27.5776C135.701 23.0039 132.678 18.4704 129.676 13.937Z"
        fill={theme.text}
      />
    </svg>
  )
}

export default Okex
