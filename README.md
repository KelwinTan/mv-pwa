# MV PWA Auth

Auth Login/Register Progressive Web Apps for Maker's Venture Technical Test

## Description

Auth Progressive Web App using Next JS v12

## Design Decisions
- Used firebase SDK auth for ease of integration for authentication instead of having to build an authentication service from scratch.
- Could also used other auth solutions such as OAuth
- Firebase SDK also has cross-platform support for web, iOS, Android making it a great authentication mechanism for our PWA
- Firebase SDK also has support for Social Sign-In Providers such as "Sign In with Google"
- Firebase SDK is secure and scalable
- Chakra UI library was used because the design is minimalistic and has great support from the React JS community
- Next JS was used for it's ability to do Server-Side Rendering which is the best approach for PWA requirements
- Next JS has a great and active community and ecosystem having a rich ecosystem of plugins, libraries, and examples so it can be beneficial for finding solutions to common PWA challenges and staying up-to-date with best practices

### Dependencies

- Firebase SDK v9.14.0
- Next JS v12.2.5
- Chakra UI v2^

### Installing Dependencies

* npm install

### Executing program

* How to run the program
* Step-by-step bullets
```
npm run dev
open localhost:3035
```

## Authors

Contributors names and contact info

Kelwin Tantono
[@KelwinTan](https://github.com/KelwinTan)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [Converting Next JS to PWA](https://dev.to/j471n/convert-nextjs-app-to-pwa-3fd)
* [Chakra UI](https://chakra-ui.com/)
* [Firebase SDK](https://firebase.google.com/docs/auth)
