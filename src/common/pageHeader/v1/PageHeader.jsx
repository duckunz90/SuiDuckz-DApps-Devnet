import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = () => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                
              </div>
             
            </div>
          </div>

          <div className="col-md-7">
            <div className="breadcrumb_form">
              
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
