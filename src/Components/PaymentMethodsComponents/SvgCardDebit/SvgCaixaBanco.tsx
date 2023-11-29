const SvgCaixaBanco = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      data-testid="caixa"
      className="svg-caixa-banco"
    >
      <g fillRule="nonzero" fill="none">
        <rect fill="#0A6CB4" x="0.471" y="0.471" width="31.059" height="31.059" rx="2.75"></rect>
        <path
          fill="#F39200"
          d="M20.088 8.235h6.243l-6.839 7.118h-6.286zM12.53 16.043h6.243l-6.84 7.118H5.647z"
        ></path>
        <path
          fill="#FFF"
          d="M9.702 8.235h6.135l3.662 7.118h-6.287zM13.549 16.043h6.135l3.662 7.118h-6.287z"
        ></path>
      </g>
    </svg>
  );
};

export default SvgCaixaBanco;
