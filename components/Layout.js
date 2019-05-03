import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>The Hacker Firm | Software Development Studio Sydney</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="The Hacker Firm is a software studio specialized in web, blockchain and VR development." />
                    <meta name="author" content="The Hacker Firm" />
                    <meta name="keywords" content="Software development, Web Development, Blockchain, VR" />
                    <meta property='og:title' content="The Hacker Firm" />
                    <meta property='og:url' content="https://www.hackerfirm.com" />
                    <meta property='og:image' content="https://www.hackerfirm.com/assets/images/logo.svg" />
                    <meta property='og:description' content="The Hacker Firm is a software studio specialized in web, blockchain and VR development." />
                    <meta name="google-site-verification" content="sQCxfB6UNPGPFnhyxUFHeQnx0zeqQXd-9jYmkS0YCzI" />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default Layout
