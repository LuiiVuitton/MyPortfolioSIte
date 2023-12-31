interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={imageSrcPath}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt=""
        />
        {brandName}
      </a>
    </nav>
  );
}

export default NavBar;
