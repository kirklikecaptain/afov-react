module.exports = {
  extends: 'react-tools',
  "rules": {
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }
}