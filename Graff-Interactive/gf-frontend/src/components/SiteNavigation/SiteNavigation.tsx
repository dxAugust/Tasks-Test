import "./SiteNavigation.css";

interface SiteNavigationProps {
  supportPage?: boolean
}

function SiteNavigation(props?: SiteNavigationProps)
{
    let title = props?.supportPage ? "graff.support" : "graff.test";

    return (
        <>
          <header>
            <h1>
              <a href="/">
                { title }
              </a>
            </h1>
          </header>
        </>
    )
}

export default SiteNavigation