import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import TransactionAction from '../transaction-action.component'

describe('TransactionAction Component', () => {
  const tOrDefault = key => key

  describe('Outgoing transaction', () => {
    it('should render -- when methodData is still fetching', () => {
      const methodData = { data: {}, done: false, error: null }
      const transaction = {
        id: 1,
        status: 'confirmed',
        submittedTime: 1534045442919,
        time: 1534045440641,
        txParams: {
          from: '0xc5ae6383e126f901dcb06131d97a88745bfa88d6',
          gas: '0x5208',
          gasPrice: '0x3b9aca00',
          nonce: '0x96',
          to: '0x50a9d56c2b8ba9a5c7f2c08c3d26e0499f23a706',
          value: '0x2386f26fc10000',
        },
      }

      const wrapper = shallow(<TransactionAction
        methodData={methodData}
        transaction={transaction}
        className="transaction-action"
      />, { context: { tOrDefault }})

      assert.equal(wrapper.find('.transaction-action').length, 1)
      assert.equal(wrapper.text(), '--')
    })

    it('should render Outgoing', () => {
      const methodData = { data: {}, done: true, error: null }
      const transaction = {
        id: 1,
        status: 'confirmed',
        submittedTime: 1534045442919,
        time: 1534045440641,
        txParams: {
          from: '0xc5ae6383e126f901dcb06131d97a88745bfa88d6',
          gas: '0x5208',
          gasPrice: '0x3b9aca00',
          nonce: '0x96',
          to: '0x50a9d56c2b8ba9a5c7f2c08c3d26e0499f23a706',
          value: '0x2386f26fc10000',
        },
      }

      const wrapper = shallow(<TransactionAction
        methodData={methodData}
        transaction={transaction}
        className="transaction-action"
      />, { context: { tOrDefault }})

      assert.equal(wrapper.find('.transaction-action').length, 1)
      assert.equal(wrapper.text(), 'outgoing')
    })

    it('should render Approved', () => {
      const methodData = {
        data: {
          name: 'Approve',
          params: [
            { type: 'address' },
            { type: 'uint256' },
          ],
        },
        done: true,
        error: null,
      }
      const transaction = {
        id: 1,
        status: 'confirmed',
        submittedTime: 1534045442919,
        time: 1534045440641,
        txParams: {
          from: '0xc5ae6383e126f901dcb06131d97a88745bfa88d6',
          gas: '0x5208',
          gasPrice: '0x3b9aca00',
          nonce: '0x96',
          to: '0x50a9d56c2b8ba9a5c7f2c08c3d26e0499f23a706',
          value: '0x2386f26fc10000',
          data: '0x095ea7b300000000000000000000000050a9d56c2b8ba9a5c7f2c08c3d26e0499f23a7060000000000000000000000000000000000000000000000000000000000000003',
        },
      }

      const wrapper = shallow(<TransactionAction
        methodData={methodData}
        transaction={transaction}
        className="transaction-action"
      />, { context: { tOrDefault }})

      assert.equal(wrapper.find('.transaction-action').length, 1)
      assert.equal(wrapper.text(), 'approve')
    })
  })
})