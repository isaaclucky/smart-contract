from algosdk import account, mnemonic
from algosdk.v2client import algod
# build transaction
from algosdk.future import transaction
from algosdk import constants
import json
import base64
from passwords import algo


def generate_algorand_keypair():
    private_key, address = account.generate_account()
    print("My address: {}".format(address))
    print("My private key: {}".format(private_key))
    print("My passphrase: {}".format(mnemonic.from_private_key(private_key)))
    
    
# generate_algorand_keypair()

# My address: P2KG4ZI2VITRBHM6TS5ZBKFA37FYCX4A7K5XQB6PUOOKIDNW6QF524BAPM
# My private key: 9xTZdi/hjg0gC0PY9EywK1TbzV69AbyGx5IHp6+TiqZ+lG5lGqonEJ2enLuQqKDfy4FfgPq7eAfPo5ykDbb0Cw==
# My passphrase: page gold rocket base build address flip drink only critic subway dress repeat recall turtle accuse stuff bulk siren idea gap pilot crowd absent huge




def first_transaction_example(private_key, my_address):
    algod_address = "http://localhost:4001"
    algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    algod_client = algod.AlgodClient(algod_token, algod_address)
    
    # check balance
    account_info = algod_client.account_info(my_address)
    print("Account balance: {} microAlgos".format(account_info.get('amount')) + "\n")
    
    # build transaction
    params = algod_client.suggested_params()
    # comment out the next two (2) lines to use suggested fees
    params.flat_fee = True
    params.fee = constants.MIN_TXN_FEE 
    receiver = "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA"
    note = "Hello World".encode()  # you can use here a message or any type of data structure you want
    amount = 1000000
    
    unsigned_txn = transaction.PaymentTxn(my_address, params, receiver, amount, None, note)
    
    # sign your first transaction, there are multiple ways to sign transaction
    signed_txn = unsigned_txn.sign(private_key)
    



    #submit transaction
    txid = algod_client.send_transaction(signed_txn)
    print("Successfully sent transaction with txID: {}".format(txid))

    # wait for confirmation 
    try:
        confirmed_txn = transaction.wait_for_confirmation(algod_client, txid, 4)  
    except Exception as err:
        print(err)
        return
    # print the general information on the transaction
    print("Transaction information: {}".format(
        json.dumps(confirmed_txn, indent=4)))
    print("Decoded note: {}".format(base64.b64decode(
        confirmed_txn["txn"]["txn"]["note"]).decode()))
    
    
    # general information about the initial and final value in sender
    print("Starting Account balance: {} microAlgos".format(account_info.get('amount')) )
    print("Amount transfered: {} microAlgos".format(amount) )    
    print("Fee: {} microAlgos".format(params.fee) ) 


    account_info = algod_client.account_info(my_address)
    print("Final Account balance: {} microAlgos".format(account_info.get('amount')) + "\n")
    
    


my_address = algo['my_address']
private_key = algo['my_private_key']

first_transaction_example(private_key,my_address)