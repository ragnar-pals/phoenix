// we have to describe interface to get proper type-hinting
export interface Routes {
  accounts: string;
  addAccount: string;
  createAccount: string;
  importAccount: string;
  home: string;
  send: string;
  receive: string;
  viewQRCode: string;
  accountDetails: string;
  settings: string;
  scan: string;
  transactionDetails: string;
}

/**
 * List of all in-app routes
 */
export const routes: Routes = {
  accounts: 'accounts',
  addAccount: 'addAccount',
  createAccount: 'CreateAccount',
  importAccount: 'importAccount',
  home: 'Home',
  send: 'send',
  receive: 'receive',
  viewQRCode: 'viewQRCode',
  accountDetails: 'accountDetails',
  settings: 'settings',
  scan: 'scanQRCode',
  transactionDetails: 'transactionDetails',
};
