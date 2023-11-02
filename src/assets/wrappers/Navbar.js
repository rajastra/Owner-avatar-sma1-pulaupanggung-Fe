import styled from 'styled-components';

const Wrapper = styled.nav`
  .nav-center {
    background: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  

  }

    .hamburger-icon {
      display: none;
    }

    .hamburger {
      width: 30px;
      height: 30px;
    }

    .nav-links {
      display: none;
    }

    .nav-link {
      color: var(--grey-800);
      padding: 0.5rem 0.5rem 0.5rem 0;
      transition: var(--transition);
      letter-spacing: 2px;
    }

    .nav-link:hover {
      color: var(--primary-100);
    }

    .active {
      color: var(--primary-100);
    }

    @media (min-width: 768px) {
      .hamburger-icon {
        display: none;
      }

      .nav-center {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .nav-links {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        margin-top: 0;
      }

      .nav-link {
        margin-right: 20px; /* Add margin between navigation links */
      }
    }

    @media (max-width: 767px) {
      .nav-links.show-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .hamburger-icon {
        display: block;
      }
    }

    .nav-center.menu-open {
      .nav-links.show-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
      }
    }
  }
`;

export default Wrapper;
