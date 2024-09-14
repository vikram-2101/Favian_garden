import { cn } from "@/lib";

export const bulbLightningIcon = (className?: string) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M2.4065 0.202881L1.7025 0.905881L2.75 1.95288L3.453 1.24988L2.4065 0.202881ZM11.594 0.202881L10.5465 1.24988L11.25 1.95288L12.297 0.906381L11.594 0.202881ZM7 0.514881C6.835 0.516214 6.66833 0.526881 6.5 0.546881H6.485C4.457 0.779381 2.843 2.41788 2.5625 4.43688C2.3385 6.06188 3.0085 7.53538 4.125 8.48438C4.58164 8.8742 4.89054 9.40904 5 9.99938V12.9994H6.14C6.314 13.2979 6.6315 13.4994 7 13.4994C7.3685 13.4994 7.686 13.2979 7.86 12.9994H9V10.9994H9.047V10.4054C9.047 9.67238 9.428 8.93338 10.047 8.35888C10.875 7.52988 11.5 6.35238 11.5 4.99988C11.5 2.52988 9.467 0.491881 7 0.514881ZM7 1.51488C8.9325 1.48788 10.5 3.06988 10.5 4.99988C10.5 6.04688 10.015 6.96888 9.3435 7.63988L9.3595 7.65588C8.69246 8.27144 8.26101 9.10038 8.1395 9.99988H5.9525C5.8425 9.14288 5.475 8.31338 4.7805 7.71838C3.897 6.96838 3.3705 5.83838 3.5465 4.56238C3.765 2.98738 5.043 1.72088 6.609 1.54738C6.7383 1.52945 6.86851 1.51877 6.999 1.51538L7 1.51488ZM0 4.99988V5.99988H1.5V4.99988H0ZM12.5 4.99988V5.99988H14V4.99988H12.5ZM2.75 9.04688L1.703 10.0934L2.4065 10.7969L3.4525 9.74988L2.75 9.04688ZM11.25 9.04688L10.547 9.74988L11.5935 10.7969L12.297 10.0934L11.25 9.04688ZM6 10.9999H8V11.9999H6V10.9999Z"
        fill="white"
      />
    </svg>
  );
};

export const squareIcon = (className?: string) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect x="0.5" y="1" width="13" height="13" rx="3.5" stroke="white" />
    </svg>
  );
};

export const portraitIcon = (className?: string) => {
  return (
    <svg
      width="15"
      height="21"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect x="1" y="1" width="13" height="19" rx="3.5" stroke="white" />
    </svg>
  );
};

export const landscapeIcon = (className?: string) => {
  return (
    <svg
      width="27"
      height="15"
      viewBox="0 0 27 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect x="1" y="1" width="25" height="13" rx="3.5" stroke="white" />
    </svg>
  );
};
