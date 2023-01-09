import useTheme from 'hooks/useTheme'

function Arbitrum({ size, color }: { size?: number; color?: string }) {
  const theme = useTheme()
  return (
    <svg width={size || 36} height={size || 36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1115 23.2291L23.0772 31.023L27.6646 28.3646L21.1428 18.0852L18.1115 23.2291Z"
        fill={color || theme.text}
      />
      <path
        d="M31.8418 25.2381L31.8384 23.108L24.7123 12.0088L22.0685 16.4949L28.9478 27.6207L31.4351 26.1793C31.679 25.9811 31.8267 25.6904 31.8421 25.3767L31.8418 25.2381Z"
        fill={color || theme.text}
      />
      <path
        d="M1.98 27.2468L5.49244 29.2708L17.1811 10.5254L15.1973 10.4731C13.5071 10.4492 11.6863 10.8886 10.8506 12.2528L4.21304 22.5408L1.98 25.9718V27.2468Z"
        fill={color || theme.text}
      />
      <path
        d="M23.9274 10.5254L18.699 10.5444L6.87035 30.0639L11.0048 32.4444L12.1292 30.5375L23.9274 10.5254Z"
        fill={color || theme.text}
      />
      <path
        d="M34.0451 10.4986C34.0014 9.40514 33.4093 8.40418 32.482 7.82143L19.4841 0.346673C18.5668 -0.115211 17.4209 -0.115805 16.502 0.346376C16.3933 0.401174 3.86186 7.6689 3.86186 7.6689C3.68843 7.7521 3.52137 7.85116 3.36424 7.96365C2.53642 8.55693 2.03183 9.47892 1.98 10.4918V25.9719L4.21304 22.5408L4.19354 10.5964C4.19614 10.5528 4.20162 10.5098 4.20941 10.4673C4.25991 10.1863 4.41681 9.93561 4.65305 9.76618C4.712 9.72398 17.4575 2.34637 17.498 2.32612C17.7976 2.17567 18.1784 2.17389 18.4783 2.32145L31.308 9.70115C31.6115 9.89446 31.8018 10.2222 31.8187 10.5805V25.3767C31.8032 25.6904 31.6791 25.9811 31.4352 26.1793L28.9478 27.6207L27.6644 28.3645L23.0772 31.0229L18.4252 33.7188C18.1746 33.8094 17.8817 33.8043 17.6332 33.7033L12.1291 30.5375L11.0048 32.4445L15.9511 35.2923C16.1147 35.3854 16.2604 35.4678 16.38 35.5349C16.5651 35.6387 16.6913 35.7082 16.7359 35.7299C17.0874 35.9006 17.5933 36 18.0491 36C18.467 36 18.8746 35.9233 19.2601 35.7722L32.7722 27.947C33.5478 27.3461 34.004 26.4399 34.0451 25.4582V10.4986Z"
        fill={color || theme.text}
      />
    </svg>
  )
}

export default Arbitrum
