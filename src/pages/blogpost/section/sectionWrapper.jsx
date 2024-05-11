const SectionWrapper = ({ title, data, children }) => {
  return (
    data ? <div className="section-wrapper">
        <h3>{title}</h3>
        {children}  
    </div> : <></>
  );
}

export default SectionWrapper;
