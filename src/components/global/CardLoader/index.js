import ContentLoader from "react-content-loader";

export const CardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
    <rect x="0" y="107" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="162" rx="8" ry="8" width="80" height="15" /> 
    <rect x="118" y="145" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)