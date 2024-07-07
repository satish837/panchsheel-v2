'use strict';
var PDFFlip = PDFFlip || {};
! function a(a, _0x5f1bx3) {
    function _0x5f1bx4() {
        _0x5f1bx28 = function(a) {
            function _0x5f1bx5(_0x5f1bx5) {
                function _0x5f1bx6() {
                    _0x5f1bx7['renderRequestPending'] = !0
                }
                _0x5f1bx5 = _0x5f1bx5 || {};
                var _0x5f1bx7 = this;
                a['call'](this, _0x5f1bx5), _0x5f1bx7['options'] = _0x5f1bx5, _0x5f1bx7['canvas'] = _0x5f1bx3(_0x5f1bx7['renderer']['domElement'])['addClass']('PDFFlip-3dcanvas'), _0x5f1bx7['container'] = _0x5f1bx5['container'], _0x5f1bx7['container']['append'](_0x5f1bx7['canvas']), _0x5f1bx7['container']['height'](_0x5f1bx5['height']), _0x5f1bx7['type'] = 'PreviewStage', _0x5f1bx7['mouse'] = new THREE['Vector2'], _0x5f1bx7['raycaster'] = new THREE['Raycaster'], _0x5f1bx7['camera']['position']['set'](0, 20, 600), _0x5f1bx7['camera']['lookAt'](new THREE.Vector3(10, 0, 10)), _0x5f1bx7['spotLight']['position']['set'](-100, 200, 400), _0x5f1bx7['spotLight']['castShadow'] = !_0x5f1bx22, _0x5f1bx7['spotLight']['shadow']['bias'] = 1, _0x5f1bx7['spotLight']['intensity'] = 0.2, _0x5f1bx7['ambientLight']['color'] = new THREE.Color('#888'), _0x5f1bx7['ambientLight']['intensity'] = 1.45;
                var _0x5f1bx8 = new THREE['ShadowMaterial'];
                _0x5f1bx8['opacity'] = 0.15, _0x5f1bx7['ground']['material'] = _0x5f1bx8, _0x5f1bx7['ground']['position']['z'] = -3, _0x5f1bx7['orbitControl']['maxAzimuthAngle'] = 0, _0x5f1bx7['orbitControl']['minAzimuthAngle'] = 0, _0x5f1bx7['orbitControl']['minPolarAngle'] = 1.65, _0x5f1bx7['orbitControl']['maxPolarAngle'] = 1.65, _0x5f1bx7['orbitControl']['mouseButtons']['ORBIT'] = THREE['MOUSE']['RIGHT'], _0x5f1bx7['orbitControl']['mouseButtons']['PAN'] = -1, _0x5f1bx7['orbitControl']['maxDistance'] = 5e3, _0x5f1bx7['orbitControl']['minDistance'] = 50, _0x5f1bx7['orbitControl']['noZoom'] = !0, _0x5f1bx7['selectiveRendering'] = !0, _0x5f1bx7['orbitControl']['zoomSpeed'] = 5, _0x5f1bx7['orbitControl']['keyPanSpeed'] = 0, _0x5f1bx7['orbitControl']['center']['set'](0, 0, 0), _0x5f1bx7['orbitControl']['update'](), _0x5f1bx7['swipe_threshold'] = _0x5f1bx22 ? 15 : 20;
                var _0x5f1bx9 = _0x5f1bx7['cssRenderer'] = new THREE['CSS3DRenderer'];
                _0x5f1bx3(_0x5f1bx9['domElement'])['css']({
                    position: 'absolute',
                    top: 0,
                    pointerEvents: 'none'
                })['addClass']('PDFFlip-3dcanvas'), _0x5f1bx7['container'][0]['appendChild'](_0x5f1bx9['domElement']);
                var _0x5f1bxa = _0x5f1bx7['cssScene'] = new THREE['Scene'],
                    _0x5f1bxb = document['createElement']('div'),
                    _0x5f1bxc = document['createElement']('div'),
                    _0x5f1bxd = _0x5f1bxa['divLeft'] = new THREE.CSS3DObject(_0x5f1bxb),
                    _0x5f1bxe = _0x5f1bxa['divRight'] = new THREE.CSS3DObject(_0x5f1bxc);
                _0x5f1bxa['add'](_0x5f1bxd), _0x5f1bxa['add'](_0x5f1bxe), _0x5f1bx7['resizeCallback'] = function() {
                    _0x5f1bx9['setSize'](_0x5f1bx7['canvas']['width'](), _0x5f1bx7['canvas']['height']())
                }, window['addEventListener'](_0x5f1bx14['move'], _0x5f1bx6, !1), window['addEventListener']('keyup', _0x5f1bx6, !1), _0x5f1bx7['dispose'] = function() {
                    _0x5f1bx7['clearChild'](), _0x5f1bx7['render'](), window['removeEventListener'](_0x5f1bx14['move'], _0x5f1bx6, !1), 1 == _0x5f1bx7['options']['scrollWheel'] && (_0x5f1bx7['renderer']['domElement']['removeEventListener']('mousewheel', _0x5f1bxf, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('DOMMouseScroll', _0x5f1bxf, !1)), window['removeEventListener']('keyup', _0x5f1bx6, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('mousemove', _0x5f1bx10, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('touchmove', _0x5f1bx10, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('mousedown', _0x5f1bx11, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('touchstart', _0x5f1bx11, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('mouseup', _0x5f1bx13, !1), _0x5f1bx7['renderer']['domElement']['removeEventListener']('touchend', _0x5f1bx13, !1), _0x5f1bx7['canvas']['remove'](), _0x5f1bx9['domElement']['remove'](), _0x5f1bx7['renderCallback'] = null, _0x5f1bx7['orbitControl']['dispose'](), _0x5f1bx7['renderer']['dispose'](), _0x5f1bx7['cancelRAF']()
                }, _0x5f1bx7['renderCallback'] = function() {
                    TWEEN['getAll']()['length'] > 0 && (_0x5f1bx7['renderRequestPending'] = !0), TWEEN['update'](), _0x5f1bx9['render'](_0x5f1bxa, _0x5f1bx7['camera'])
                };
                var _0x5f1bxf = function(a) {
                        var _0x5f1bx3 = 0;
                        if (void(0) !== a['wheelDelta'] ? _0x5f1bx3 = a['wheelDelta'] : void(0) !== a['detail'] && (_0x5f1bx3 = -a['detail']), _0x5f1bx3) {
                            var _0x5f1bx5 = _0x5f1bx7['previewObject']['contentProvider']['zoomScale'];
                            (_0x5f1bx3 > 0 && 1 == _0x5f1bx5 || _0x5f1bx3 < 0 && _0x5f1bx5 > 1) && a['preventDefault'](), _0x5f1bx7['previewObject']['zoom'](_0x5f1bx3 > 0)
                        };
                        _0x5f1bx6()
                    },
                    _0x5f1bx10 = function(a) {
                        if (_0x5f1bx7['renderRequestPending'] = !0, a = _0x5f1bx20(a), _0x5f1bx7['isMouseDown'] && 0 != a['movementX'] && 0 != a['movementY'] && (_0x5f1bx7['isMouseMoving'] = !0), 1 == _0x5f1bx7['isMouseDown'] && 1 == _0x5f1bx7['previewObject']['contentProvider']['zoomScale']) {
                            var _0x5f1bx3 = a['pageX'] - _0x5f1bx7['lastPos'];
                            performance['now']() - _0x5f1bx7['lastTime'];
                            Math['abs'](_0x5f1bx3) > _0x5f1bx7['swipe_threshold'] && (_0x5f1bx3 < 0 ? _0x5f1bx7['target']['next']() : _0x5f1bx7['target']['prev'](), a['preventDefault'](), _0x5f1bx7['isMouseDown'] = !1), _0x5f1bx7['lastPos'] = a['pageX'], _0x5f1bx7['lastTime'] = performance['now']()
                        }
                    },
                    _0x5f1bx11 = function(a) {
                        a = _0x5f1bx20(a), document['activeElement']['blur'](), _0x5f1bx7['mouseValue'] = a['pageX'] + ',' + a['pageY'], _0x5f1bx7['isMouseMoving'] = !1, _0x5f1bx7['isMouseDown'] = !0, _0x5f1bx7['lastPos'] = a['pageX'], _0x5f1bx7['lastTime'] = performance['now']()
                    },
                    _0x5f1bx12 = function(a) {
                        if (_0x5f1bx7['isMouseDown'] = !1, 0 !== a['button']) {
                            return this
                        };
                        var _0x5f1bx5 = a['pageX'] + ',' + a['pageY'];
                        if (_0x5f1bx7['isMouseMoving']) {
                            ;
                        } else {
                            if (_0x5f1bx5 == _0x5f1bx7['mouseValue']) {
                                a = a || window['event'], a = _0x5f1bx3['event']['fix'](a);
                                var _0x5f1bx8 = _0x5f1bx7['mouse'],
                                    _0x5f1bx9 = _0x5f1bx7['raycaster'];
                                _0x5f1bx8['x'] = a['offsetX'] / _0x5f1bx7['canvas']['innerWidth']() * 2 - 1, _0x5f1bx8['y'] = 1 - a['offsetY'] / _0x5f1bx7['canvas']['innerHeight']() * 2, _0x5f1bx9['setFromCamera'](_0x5f1bx8, _0x5f1bx7['camera']);
                                var _0x5f1bxa = _0x5f1bx9['intersectObjects'](_0x5f1bx7['target'] instanceof MOCKUP['Bundle'] ? _0x5f1bx7['target']['children'] : [_0x5f1bx7['target']], !0);
                                if (_0x5f1bxa['length'] > 0) {
                                    var _0x5f1bxb, _0x5f1bxc = 0;
                                    do {
                                        _0x5f1bxb = void(0) !== _0x5f1bxa[_0x5f1bxc] ? _0x5f1bxa[_0x5f1bxc]['object'] : void(0), _0x5f1bxc++
                                    } while ((_0x5f1bxb instanceof THREE['BoxHelper'] || !(_0x5f1bxb instanceof MOCKUP['Paper']) || 1 == _0x5f1bxb['isFlipping']) && _0x5f1bxc < _0x5f1bxa['length']);;
                                    void(0) !== _0x5f1bxb['userData']['object'] || (_0x5f1bxb['angles'][1] > 90 ? 1 != _0x5f1bxb['isEdge'] && _0x5f1bx7['target']['next']() : 1 != _0x5f1bxb['isEdge'] && _0x5f1bx7['target']['prev']())
                                }
                            }
                        }
                    },
                    _0x5f1bx13 = function(a) {
                        a = _0x5f1bx20(a), _0x5f1bx12(a)
                    };
                return _0x5f1bx7['renderer']['domElement']['addEventListener']('mousemove', _0x5f1bx10, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('touchmove', _0x5f1bx10, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('mousedown', _0x5f1bx11, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('touchstart', _0x5f1bx11, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('mouseup', _0x5f1bx13, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('touchend', _0x5f1bx13, !1), 1 == _0x5f1bx7['options']['scrollWheel'] && (_0x5f1bx7['renderer']['domElement']['addEventListener']('mousewheel', _0x5f1bxf, !1), _0x5f1bx7['renderer']['domElement']['addEventListener']('DOMMouseScroll', _0x5f1bxf, !1)), _0x5f1bx3(_0x5f1bx7['renderer']['domElement'])['css']({
                    display: 'block'
                }), _0x5f1bx3(window)['trigger']('resize'), this
            }
            return _0x5f1bx24(_0x5f1bx5, a), _0x5f1bx5['prototype']['width'] = function() {
                return this['container']['width']()
            }, _0x5f1bx5['prototype']['height'] = function() {
                return this['container']['height']()
            }, _0x5f1bx5
        }(MOCKUP.Stage), MOCKUP['PreviewStage'] = _0x5f1bx28;
        var _0x5f1bx5 = function(a) {
            function _0x5f1bx3(_0x5f1bx3, _0x5f1bx5) {
                _0x5f1bx3 = _0x5f1bx3 || {}, _0x5f1bx3['folds'] = 1, a['call'](this, _0x5f1bx3, _0x5f1bx5), this['angle'] = 0, this['isFlipping'] = !1, this['type'] = 'BookPaper'
            }
            return _0x5f1bx24(_0x5f1bx3, a), _0x5f1bx3['prototype']['tween'] = function(a, _0x5f1bx3) {
                var _0x5f1bx5 = this,
                    _0x5f1bx7 = 1e-5;
                _0x5f1bx5['originalStiff'] = _0x5f1bx5['stiffness'];
                var _0x5f1bx8 = _0x5f1bx5['newStiffness'],
                    _0x5f1bx9 = _0x5f1bx3 - a;
                _0x5f1bx5['init'] = {
                    angle: a,
                    angle2: a < 90 ? 0 : 180,
                    stiff: _0x5f1bx5['originalStiff']
                }, _0x5f1bx5['first'] = {
                    angle: a + _0x5f1bx9 / 4,
                    angle2: 90,
                    stiff: _0x5f1bx5['originalStiff']
                }, _0x5f1bx5['mid'] = {
                    angle: a + 2 * _0x5f1bx9 / 4,
                    angle2: a < 90 ? 135 : 45,
                    stiff: _0x5f1bx5['newStiffness']
                }, _0x5f1bx5['mid2'] = {
                    angle: a + 3 * _0x5f1bx9 / 4,
                    angle2: a < 90 ? 180 : 0,
                    stiff: _0x5f1bx5['newStiffness']
                }, _0x5f1bx5['end'] = {
                    angle: _0x5f1bx3,
                    angle2: a < 90 ? 180 : 0,
                    stiff: _0x5f1bx5['newStiffness']
                }, _0x5f1bx5['isFlipping'] = !0;
                var _0x5f1bxa = function(a, _0x5f1bx3) {
                    _0x5f1bx5['angles'][1] = a['angle'], _0x5f1bx5['angles'][4] = a['angle2'], _0x5f1bx5['stiffness'] = a['stiff'] / (_0x5f1bx8 + _0x5f1bx7) * (_0x5f1bx5['newStiffness'] + _0x5f1bx7), _0x5f1bx5['stiffness'] = isNaN(_0x5f1bx5['stiffness']) ? 0 : a['stiff'], _0x5f1bx5['updateAngle'](!0)
                };
                new TWEEN.Tween(_0x5f1bx5['init'])['to']({
                    angle: [_0x5f1bx5['first']['angle'], _0x5f1bx5['mid']['angle'], _0x5f1bx5['mid2']['angle'], _0x5f1bx5['end']['angle']],
                    angle2: [_0x5f1bx5['first']['angle2'], _0x5f1bx5['mid']['angle2'], _0x5f1bx5['mid2']['angle2'], _0x5f1bx5['end']['angle2']],
                    stiff: [_0x5f1bx5['first']['stiff'], _0x5f1bx5['mid']['stiff'], _0x5f1bx5['mid2']['stiff'], _0x5f1bx5['end']['stiff']]
                }, _0x5f1bx5['parent']['duration'])['onUpdate'](function(a) {
                    _0x5f1bxa(this, a)
                })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](function(a) {
                    _0x5f1bx5['stiffness'] = _0x5f1bx5['newStiffness'], _0x5f1bx5['updateAngle'](), _0x5f1bx5['isFlipping'] = !1, _0x5f1bx5['parent'] && _0x5f1bx5['parent']['refresh'] && _0x5f1bx5['parent']['refresh']()
                })['start']()
            }, _0x5f1bx3
        }(MOCKUP.FlexBoxPaper);
        MOCKUP['BookPaper'] = _0x5f1bx5;
        var _0x5f1bx7 = function(_0x5f1bx3) {
            function _0x5f1bx5(_0x5f1bx5, _0x5f1bx7) {
                _0x5f1bx5 = _0x5f1bx5 || {}, _0x5f1bx5['segments'] = _0x5f1bx5['segments'] || 50, this['pageCount'] = _0x5f1bx5['pageCount'], this['height'] = _0x5f1bx5['height'], this['width'] = _0x5f1bx5['width'], this['pageCount'] = 1 == this['pageCount'] ? this['pageCount'] : 2 * Math['ceil'](this['pageCount'] / 2), this['Flip_Direction'] = _0x5f1bx5['Flip_Direction'] || a['Flip_Direction']['LTR'], this['startPage'] = 1, this['endPage'] = this['pageCount'], this['stackCount'] = _0x5f1bx5['stackCount'] || 6, this['materials'] = [], _0x5f1bx3['call'](this, _0x5f1bx5, _0x5f1bx7), this['angles'] = [0, 0, 0, 0, 0, 0], this['stiffness'] = _0x5f1bx5['stiffness'] || 1.5, this['_activePage'] = _0x5f1bx5['openPage'] || this['startPage'], this['createStack'](_0x5f1bx5), this['pageMode'] = _0x5f1bx5['pageMode'] || (_0x5f1bx22 || this['pageCount'] <= 2 ? a['PAGE_MODE']['SINGLE'] : a['PAGE_MODE']['DOUBLE']), this['type'] = 'Book'
            }
            return _0x5f1bx24(_0x5f1bx5, _0x5f1bx3), _0x5f1bx5['prototype']['getPageByNumber'] = function(a) {
                return this['getObjectByName'](Math['floor']((a - 1) / 2).toString())
            }, _0x5f1bx5['prototype']['activePage'] = function(a) {
                return void(0) == a ? this['_activePage'] : void(this)['gotoPage'](a)
            }, _0x5f1bx5['prototype']['gotoPage'] = function(a) {
                a = parseInt(a, 10), this['_activePage'] = a, this['updatePage'](a)
            }, _0x5f1bx5['prototype']['moveBy'] = function(a) {
                var _0x5f1bx3 = this['_activePage'] + a;
                _0x5f1bx3 = _0x5f1bx18(_0x5f1bx3, this['startPage'], this['endPage']), this['gotoPage'](_0x5f1bx3)
            }, _0x5f1bx5['prototype']['next'] = function(_0x5f1bx3) {
                void(0) == _0x5f1bx3 && (_0x5f1bx3 = this['Flip_Direction'] == a['Flip_Direction']['RTL'] ? -this['pageMode'] : this['pageMode']), this['moveBy'](_0x5f1bx3)
            }, _0x5f1bx5['prototype']['prev'] = function(_0x5f1bx3) {
                void(0) == _0x5f1bx3 && (_0x5f1bx3 = this['Flip_Direction'] == a['Flip_Direction']['RTL'] ? this['pageMode'] : -this['pageMode']), this['moveBy'](_0x5f1bx3)
            }, _0x5f1bx5['prototype']['updateAngle'] = function() {
                for (var a = this['angles'][1], _0x5f1bx3 = this['angles'][4], _0x5f1bx5 = _0x5f1bx3 - a, _0x5f1bx7 = this['stackCount'], _0x5f1bx8 = 0; _0x5f1bx8 < _0x5f1bx7; _0x5f1bx8++) {
                    var _0x5f1bx9 = this['children'][_0x5f1bx8];
                    _0x5f1bx9['angles'][1] = a + _0x5f1bx8 * _0x5f1bx5 / (100 * _0x5f1bx7), _0x5f1bx9['stiffness'] = this['stiffness'], _0x5f1bx9['updateAngle']()
                }
            }, _0x5f1bx5['prototype']['refresh'] = function() {
                this['updatePage'](this._activePage), void(0) !== this['flipCallback'] && this['flipCallback']()
            }, _0x5f1bx5['prototype']['updatePage'] = function(_0x5f1bx3) {
                var _0x5f1bx5 = this['Flip_Direction'] == a['Flip_Direction']['RTL'];
                _0x5f1bx3 = Math['floor'](_0x5f1bx3 / 2), _0x5f1bx5 && (_0x5f1bx3 = Math['floor'](this['pageCount'] / 2) - _0x5f1bx3);
                var _0x5f1bx7 = this['oldBaseNumber'] || 0,
                    _0x5f1bx8 = this['pageCount'] / 2,
                    _0x5f1bx9 = this['stackCount'],
                    _0x5f1bxa = 0.02,
                    _0x5f1bxb = 0.4,
                    _0x5f1bxc = (0.5 - Math['abs'](_0x5f1bx8 / 2 - _0x5f1bx3) / _0x5f1bx8) / this['stiffness'],
                    _0x5f1bx14 = Math['floor'](_0x5f1bx9 / 2),
                    _0x5f1bxe = _0x5f1bx14,
                    _0x5f1bx6 = !1;
                _0x5f1bx7 > _0x5f1bx3 ? (_0x5f1bx6 = !0, this['children'][_0x5f1bx9 - 1]['skipFlip'] = !0, this['children']['unshift'](this['children']['pop']())) : _0x5f1bx7 < _0x5f1bx3 && (this['children'][0]['skipFlip'] = !0, this['children']['push'](this['children']['shift']())), Math['abs'](_0x5f1bx7 - _0x5f1bx3) > 1;
                for (var _0x5f1bxf = _0x5f1bx8 - _0x5f1bx3, _0x5f1bx10 = 5 / _0x5f1bx8, _0x5f1bx11 = _0x5f1bx10 * _0x5f1bx3 / 2, _0x5f1bx12 = _0x5f1bx10 * _0x5f1bxf / 2, _0x5f1bx13 = _0x5f1bx11 < _0x5f1bx12 ? _0x5f1bx12 : _0x5f1bx11, _0x5f1bx15 = 0; _0x5f1bx15 < _0x5f1bx9; _0x5f1bx15++) {
                    var _0x5f1bx16, _0x5f1bx17 = this['children'][_0x5f1bx15],
                        _0x5f1bx18 = (_0x5f1bx17['color'], _0x5f1bx17['angles'][1]),
                        _0x5f1bx19 = _0x5f1bx3 - _0x5f1bxe + _0x5f1bx15,
                        _0x5f1bx1a = _0x5f1bx17['name'];
                    _0x5f1bx17['visible'] = _0x5f1bx19 >= 0 && _0x5f1bx19 < _0x5f1bx8, void(0) !== this['requestPage'] && (_0x5f1bx5 && (_0x5f1bx19 = Math['floor'](this['pageCount'] / 2) - _0x5f1bx19 - 1), _0x5f1bx17['name'] = _0x5f1bx19.toString(), _0x5f1bx17['name'] != _0x5f1bx1a && 1 == _0x5f1bx17['visible'] && (_0x5f1bx17['textureLoaded'] = !1, _0x5f1bx17['backTextureLoaded'] = !1, _0x5f1bx17['frontTextureLoaded'] = !1, _0x5f1bx17['thumbLoaded'] = !1, this['requestPage'](2 * _0x5f1bx19 + 1), this['requestPage'](2 * _0x5f1bx19 + 2))), _0x5f1bx17['isEdge'] = !1, 0 == _0x5f1bx15 ? _0x5f1bx17['depth'] = _0x5f1bx11 < _0x5f1bxb ? _0x5f1bxb : _0x5f1bx11 : _0x5f1bx15 == _0x5f1bx9 - 1 ? _0x5f1bx17['depth'] = _0x5f1bx12 < _0x5f1bxb ? _0x5f1bxb : _0x5f1bx12 : (_0x5f1bx17['depth'] = _0x5f1bxb, _0x5f1bx17['isEdge'] = !1), 1 == _0x5f1bx17['isFlipping'] && (_0x5f1bx17['depth'] = _0x5f1bxb), _0x5f1bx17['position']['x'] = 0;
                    var _0x5f1bx1b = _0x5f1bxa * _0x5f1bx15,
                        _0x5f1bx1c = 180 - _0x5f1bxa * (_0x5f1bx15 - _0x5f1bxe) + _0x5f1bxa * _0x5f1bx15;
                    if (_0x5f1bx15 < _0x5f1bxe ? (_0x5f1bx17['newStiffness'] = _0x5f1bxc / (_0x5f1bx3 / _0x5f1bx8) / 4, _0x5f1bx16 = _0x5f1bx1b, _0x5f1bx17['position']['z'] = _0x5f1bx13 - (-_0x5f1bx15 + _0x5f1bxe) * _0x5f1bxb, 1 == _0x5f1bx6 && (_0x5f1bx17['position']['z'] -= _0x5f1bxb)) : (_0x5f1bx16 = _0x5f1bx1c, _0x5f1bx17['newStiffness'] = _0x5f1bxc / (Math['abs'](_0x5f1bx8 - _0x5f1bx3) / _0x5f1bx8) / 4, _0x5f1bx17['position']['z'] = _0x5f1bx13 - (-_0x5f1bx9 + _0x5f1bx15 + _0x5f1bxe + 1) * _0x5f1bxb - _0x5f1bx17['depth']), 0 == _0x5f1bx17['isFlipping']) {
                        if (Math['abs'](_0x5f1bx18 - _0x5f1bx16) > 20 && 0 == _0x5f1bx17['skipFlip']) {
                            _0x5f1bx17['depth'] = _0x5f1bxb;
                            var _0x5f1bx1d = _0x5f1bx17['stiffness'];
                            _0x5f1bx1d = _0x5f1bx18 > _0x5f1bx16 ? _0x5f1bxc / (Math['abs'](_0x5f1bx8 - _0x5f1bx3) / _0x5f1bx8) / 4 : _0x5f1bxc / (_0x5f1bx3 / _0x5f1bx8) / 4, _0x5f1bx17['position']['z'] += _0x5f1bxb, _0x5f1bx17['stiffness'] = isNaN(_0x5f1bx1d) ? _0x5f1bx17['stiffness'] : _0x5f1bx1d, _0x5f1bx17['updateAngle'](!0), _0x5f1bx17['targetStiffness'] = _0x5f1bx15 < _0x5f1bx3 ? _0x5f1bxc / (Math['abs'](_0x5f1bx8 - _0x5f1bx3) / _0x5f1bx8) / 4 : _0x5f1bxc / (_0x5f1bx3 / _0x5f1bx8) / 4, _0x5f1bx17['targetStiffness'] = isNaN(_0x5f1bx17['targetStiffness']) ? _0x5f1bx17['stiffness'] : _0x5f1bx17['targetStiffness'], _0x5f1bx17['isFlipping'] = !0, _0x5f1bx17['tween'](_0x5f1bx18, _0x5f1bx16), void(0) !== this['preFlipCallback'] && this['preFlipCallback']()
                        } else {
                            _0x5f1bx17['skipFlip'] = !1, _0x5f1bx17['newStiffness'] = isNaN(_0x5f1bx17['newStiffness']) ? 0 : _0x5f1bx17['newStiffness'], _0x5f1bx17['angles'][1] == _0x5f1bx16 && _0x5f1bx17['stiffness'] == _0x5f1bx17['newStiffness'] && _0x5f1bx17['depth'] == _0x5f1bx17['oldDepth'] || (_0x5f1bx17['angles'][1] = _0x5f1bx17['angles'][4] = _0x5f1bx16, _0x5f1bx17['stiffness'] = _0x5f1bx17['newStiffness'], _0x5f1bx17['updateAngle'](!0))
                        }
                    };
                    _0x5f1bx17['oldDepth'] = _0x5f1bx17['depth'];
                    var _0x5f1bx1e = Math['abs'](_0x5f1bx17['geometry']['boundingBox']['max']['x']) < Math['abs'](_0x5f1bx17['geometry']['boundingBox']['min']['x']) ? _0x5f1bx17['geometry']['boundingBox']['max']['x'] : _0x5f1bx17['geometry']['boundingBox']['min']['x'];
                    _0x5f1bx17['position']['x'] = 1 == _0x5f1bx17['isEdge'] && 0 == _0x5f1bx17['isFlipping'] ? _0x5f1bx15 < _0x5f1bxe ? _0x5f1bx1e : -_0x5f1bx1e : 0
                };
                this['oldBaseNumber'] = _0x5f1bx3, void(0) !== this['updatePageCallback'] && this['updatePageCallback']()
            }, _0x5f1bx5['prototype']['createCover'] = function(a) {
                a['width'] = 2 * a['width'], this['cover'] = new MOCKUP.BiFold(a), this['add'](this['cover'])
            }, _0x5f1bx5['prototype']['createStack'] = function(a) {
                for (var _0x5f1bx3 = 'red,green,blue,yellow,orange,black' ['split'](','), _0x5f1bx5 = 0; _0x5f1bx5 < this['stackCount']; _0x5f1bx5++) {
                    a['angles'] = [, this['stackCount'] - _0x5f1bx5], a['stiffness'] = (this['stackCount'] - _0x5f1bx5) / 100;
                    var _0x5f1bx7 = new MOCKUP.BookPaper(a);
                    _0x5f1bx7['angles'][1] = 180, _0x5f1bx7['index'] = _0x5f1bx5, _0x5f1bx7['updateAngle'](), _0x5f1bx7['textureReady'] = !1, _0x5f1bx7['textureRequested'] = !1, this['add'](_0x5f1bx7), _0x5f1bx7['color'] = _0x5f1bx3[_0x5f1bx5], _0x5f1bx7['position']['z'] = -1 * _0x5f1bx5
                }
            }, _0x5f1bx5['prototype']['shininess'] = function(a) {
                return void(0) == a ? this['mainObject']['shininess']() : void(this)['mainObject']['shininess'](a)
            }, _0x5f1bx5['prototype']['bumpScale'] = function(a) {
                return void(0) == a ? this['mainObject']['bumpScale']() : void(this)['mainObject']['bumpScale'](a)
            }, _0x5f1bx5['prototype']['frontImage'] = function(a) {
                return void(0) == a ? this['mainObject']['frontImage']() : void(this)['mainObject']['frontImage'](a)
            }, _0x5f1bx5['prototype']['backImage'] = function(a) {
                return void(0) == a ? this['mainObject']['backImage']() : void(this)['mainObject']['backImage'](a)
            }, _0x5f1bx5
        }(MOCKUP.Bundle);
        MOCKUP['Book'] = _0x5f1bx7
    }
    a['PAGE_MODE'] = {
        SINGLE: 1,
        DOUBLE: 2,
        AUTO: void(0)
    }, a['Flip_Direction'] = {
        LTR: 1,
        RTL: 2
    }, a['CORNERS'] = {
        TL: 'tl',
        TR: 'tr',
        BL: 'bl',
        BR: 'br',
        L: 'l',
        R: 'r',
        NONE: void(0)
    }, a['SOURCE_TYPE'] = {
        IMAGE: 'image',
        PDF: 'pdf',
        HTML: 'html'
    }, a['DISPLAY_TYPE'] = {
        WEBGL: '3D',
        HTML: '2D'
    }, a['PAGE_SIZE'] = {
        AUTO: 0,
        SINGLE: 1,
        DOUBLEINTERNAL: 2
    };
    var _0x5f1bx5 = a['defaults'] = {
            webgl: !0,
            Page_Flip_Sound_Enable: !0,
            Open_Table_of_Contents_on_Start: !1,
            overwritePDFOutline: !1,
            Allow_PDF_Download: !0,
            duration: 750,
            Flip_Direction: a['Flip_Direction']['LTR'],
            pageMode: a['PAGE_MODE']['AUTO'],
            backgroundColor: '#cccccc',
            transparent: !1,
            hard: 'none',
            maxTextureSize: 1600,
            minTextureSize: 512,
            icons: {
                next: 'fa fa-chevron-right',
                prev: 'fa fa-chevron-left',
                end: 'fa fa-forward',
                start: 'fa fa-backward',
                download: 'fa fa-file-pdf-o',
                zoomin: 'fa fa-search-plus',
                zoomout: 'fa fa-search-minus',
                fullscreen: 'fa fa-arrows-alt',
                outline: 'fa fa-list',
                close: 'fa fa-times-circle',
                sound: 'fa fa-volume-down'
            },
            text: {
                toggleSound: 'Sound On/Off',
                toggleOutline: 'Table of Contents',
                previousPage: 'Previous Page',
                nextPage: 'Next Page',
                toggleFullscreen: 'Fullscreen',
                zoomIn: 'Zoom In',
                zoomOut: 'Zoom Out',
                downloadPDFFile: 'Download PDF',
                gotoFirstPage: 'First Page',
                gotoLastPage: 'Last Page'
            },
            allControls: 'outline,startPage,altPrev,pageNumber,altNext,endPage,zoomIn,zoomOut,fullScreen,download,sound',
            mainControls: 'outline,startPage,altPrev,pageNumber,altNext,endPage,zoomIn,zoomOut,fullScreen,download,sound',
            hideControls: '',
            scrollWheel: !0,
            onCreate: function() {},
            onCreateUI: function() {},
            onFlip: function() {},
            beforeFlip: function() {},
            onReady: function() {},
            zoomRatio: 1.5,
            pageSize: a['PAGE_SIZE']['AUTO'],
            pdfjsSrc: '../assets/js/libs/pdf.min.js',
            pdfjsCompatibilitySrc: '../assets/js/libs/compatibility.js',
            pdfjsWorkerSrc: '../assets/js/libs/pdf.worker.min.js',
            soundFile: '../assets/sound/flip.mp3',
            enableDebugLog: !1,
            canvasToBlob: !0,
            textureLoadFallback: 'blank',
            stiffness: 8,
            minTopOffset: 30,
            Main_Background_Image: '',
            pageRatio: void(0),
            defaultPageRatio: 210 / 297
        },
        _0x5f1bx7 = 'WebKitCSSMatrix' in window || document['body'] && 'MozPerspective' in document['body']['style'],
        _0x5f1bx8 = 'onmousedown' in window,
        _0x5f1bxa = ('ontouchstart' in window, a['utils'] = {
            drag: {
                left: 0,
                right: 1,
                none: -1
            },
            mouseEvents: _0x5f1bx8 ? {
                type: 'mouse',
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup'
            } : {
                type: 'touch',
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend'
            },
            html: {
                div: '<div/>',
                img: '<img/>',
                a: '<a>',
                input: '<input type=\'text\'/>'
            },
            toRad: function(a) {
                return a * Math['PI'] / 180
            },
            toDeg: function(a) {
                return 180 * a / Math['PI']
            },
            transition: function(a, _0x5f1bx3) {
                return a ? _0x5f1bx3 / 1e3 + 's ease-out' : '0s none'
            },
            display: function(a) {
                return a ? 'block' : 'none'
            },
            resetTranslate: function() {
                return _0x5f1bx11(0, 0)
            },
            translateStr: function(a, _0x5f1bx3) {
                return _0x5f1bx7 ? ' translate3d(' + a + 'px,' + _0x5f1bx3 + 'px, 0px) ' : ' translate(' + a + 'px, ' + _0x5f1bx3 + 'px) '
            },
            resetBoxShadow: function() {
                return 'rgba(0, 0, 0, 0) 0px 0px 20px'
            },
            rotateStr: function(a) {
                return ' rotateZ(' + a + 'deg) '
            },
            bg: function(a) {
                return '#fff' + _0x5f1bx17(a)
            },
            bgImage: function(a) {
                return void(0) == a || 'blank' == a ? '' : ' url(' + a + ')'
            },
            src: function(a) {
                return void(0) !== a ? '' + a : ''
            },
            limitAt: function(a, _0x5f1bx3, _0x5f1bx5) {
                return a < _0x5f1bx3 ? _0x5f1bx3 : a > _0x5f1bx5 ? _0x5f1bx5 : a
            },
            distOrigin: function(a, _0x5f1bx3) {
                return Math['sqrt'](Math['pow'](a, 2) + Math['pow'](_0x5f1bx3, 2))
            },
            distPoints: function(a, _0x5f1bx3, _0x5f1bx5, _0x5f1bx7) {
                return Math['sqrt'](Math['pow'](_0x5f1bx5 - a, 2) + Math['pow'](_0x5f1bx7 - _0x5f1bx3, 2))
            },
            angleByDistance: function(a, _0x5f1bx3) {
                var _0x5f1bx5 = _0x5f1bx3 / 2,
                    _0x5f1bx7 = _0x5f1bx18(a, 0, _0x5f1bx3),
                    _0x5f1bx8 = _0x5f1bx7 < _0x5f1bx5 ? _0x5f1bxf(Math['asin'](_0x5f1bx7 / _0x5f1bx5)) : 90 + _0x5f1bxf(Math['asin']((_0x5f1bx7 - _0x5f1bx5) / _0x5f1bx5));
                return _0x5f1bx8
            },
            log: function(a) {
                1 == _0x5f1bx5['enableDebugLog'] && window['console'] && console['log'](a)
            },
            lowerPowerOfTwo: function(a) {
                return Math['pow'](2, Math['floor'](Math['log'](a) / Math['LN2']))
            },
            nearestPowerOfTwo: function(a) {
                return Math['pow'](2, Math['ceil'](Math['log'](a) / Math['LN2']))
            },
            extendOptions: function(a, _0x5f1bx5) {
                return _0x5f1bx3['extend'](!0, {}, a, _0x5f1bx5)
            },
            getBasePage: function(a) {
                return 2 * Math['floor'](a / 2)
            },
            loadResources: function(_0x5f1bx3, _0x5f1bx5, _0x5f1bx7) {
                var _0x5f1bx8 = document,
                    _0x5f1bx9 = _0x5f1bx8['createElement'](_0x5f1bx3),
                    _0x5f1bxa = _0x5f1bx8['getElementsByTagName'](_0x5f1bx3)[0];
                _0x5f1bx9['async'] = !0, _0x5f1bx7 && _0x5f1bx9['addEventListener']('load', function(a) {
                    _0x5f1bx7(null, a)
                }, !1), _0x5f1bx9['src'] = _0x5f1bx5, _0x5f1bxa['parentNode']['insertBefore'](_0x5f1bx9, _0x5f1bxa)
            },
            getScript: function(a, _0x5f1bx3, _0x5f1bx5) {
                function _0x5f1bx9(a, _0x5f1bx5) {
                    void(0) !== _0x5f1bx7 && (_0x5f1bx5 || !_0x5f1bx7['readyState'] || /loaded|complete/ ['test'](_0x5f1bx7['readyState'])) && (_0x5f1bx7['onload'] = _0x5f1bx7['onreadystatechange'] = null, _0x5f1bx7 = void(0), _0x5f1bx5 || _0x5f1bx3 && _0x5f1bx3())
                }
                var _0x5f1bx7 = document['createElement']('script'),
                    _0x5f1bx8 = document['body']['getElementsByTagName']('script')[0];
                _0x5f1bx7['async'] = 1, _0x5f1bx7['setAttribute']('data-cfasync', !1), _0x5f1bx8['parentNode']['insertBefore'](_0x5f1bx7, _0x5f1bx8), _0x5f1bx7['addEventListener']('load', _0x5f1bx9, !1), _0x5f1bx7['addEventListener']('readystatechange', _0x5f1bx9, !1), _0x5f1bx7['addEventListener']('complete', _0x5f1bx9, !1), _0x5f1bx5 && _0x5f1bx7['addEventListener']('error', _0x5f1bx5, !1), _0x5f1bx7['src'] = a + ('MS' == _0x5f1bx21['dom'] ? '?' + Math['random'](1) : '')
            },
            fixMouseEvent: function(a) {
                if (a) {
                    var _0x5f1bx5 = a['originalEvent'] || a;
                    if (_0x5f1bx5['changedTouches'] && _0x5f1bx5['changedTouches']['length'] > 0) {
                        var _0x5f1bx7 = _0x5f1bx3['event']['fix'](a),
                            _0x5f1bx8 = _0x5f1bx5['changedTouches'][0];
                        return _0x5f1bx7['clientX'] = _0x5f1bx8['clientX'], _0x5f1bx7['clientY'] = _0x5f1bx8['clientY'], _0x5f1bx7['pageX'] = _0x5f1bx8['pageX'], _0x5f1bx7['pageY'] = _0x5f1bx8['pageY'], _0x5f1bx7['movementX'] = _0x5f1bx8['movementX'], _0x5f1bx7['movementY'] = _0x5f1bx8['movementY'], _0x5f1bx7
                    };
                    return a
                };
                return a
            },
            hasWebgl: function() {
                try {
                    var a = document['createElement']('canvas');
                    return !(!window['WebGLRenderingContext'] || !a['getContext']('webgl') && !a['getContext']('experimental-webgl'))
                } catch (a) {
                    return !1
                }
            }(),
            isMobile: function() {
                var a = !1;
                return function(_0x5f1bx3) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i ['test'](_0x5f1bx3) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ['test'](_0x5f1bx3['substr'](0, 4))) && (a = !0)
                }(navigator['userAgent'] || navigator['vendor'] || window['opera']), a
            }(),
            prefix: function() {
                var a = window['getComputedStyle'](document['documentElement'], ''),
                    _0x5f1bx3 = Array['prototype']['slice']['call'](a)['join']('')['match'](/-(moz|webkit|ms)-/)[1],
                    _0x5f1bx5 = 'WebKit|Moz|MS' ['match'](new RegExp('(' + _0x5f1bx3 + ')', 'i'))[1];
                return {
                    dom: _0x5f1bx5,
                    lowercase: _0x5f1bx3,
                    css: '-' + _0x5f1bx3 + '-',
                    js: _0x5f1bx3[0]['toUpperCase']() + _0x5f1bx3['substr'](1)
                }
            }(),
            __extends: window && window['__extends'] || function(a, _0x5f1bx3) {
                function _0x5f1bx7() {
                    this['constructor'] = a
                }
                for (var _0x5f1bx5 in _0x5f1bx3) {
                    _0x5f1bx3['hasOwnProperty'](_0x5f1bx5) && (a[_0x5f1bx5] = _0x5f1bx3[_0x5f1bx5])
                };
                return _0x5f1bx7['prototype'] = _0x5f1bx3['prototype'], a['prototype'] = new _0x5f1bx7, a['__super'] = _0x5f1bx3['prototype'], a
            }
        }),
        _0x5f1bxb = a['SOURCE_TYPE'],
        _0x5f1bxd = (a['DISPLAY_TYPE'], _0x5f1bxa['drag']),
        _0x5f1bx14 = _0x5f1bxa['mouseEvents'],
        _0x5f1bxe = _0x5f1bxa['html'],
        _0x5f1bx6 = _0x5f1bxa['toRad'],
        _0x5f1bxf = _0x5f1bxa['toDeg'],
        _0x5f1bx11 = (_0x5f1bxa['transition'], _0x5f1bxa['translateStr']),
        _0x5f1bx13 = (_0x5f1bxa['resetBoxShadow'], _0x5f1bxa['rotateStr']),
        _0x5f1bx17 = (_0x5f1bxa['bg'], _0x5f1bxa['bgImage']),
        _0x5f1bx18 = (_0x5f1bxa['src'], _0x5f1bxa['limitAt']),
        _0x5f1bx16 = _0x5f1bxa['distOrigin'],
        _0x5f1bx19 = _0x5f1bxa['distPoints'],
        _0x5f1bx1a = _0x5f1bxa['angleByDistance'],
        _0x5f1bx1b = _0x5f1bxa['log'],
        _0x5f1bx1c = _0x5f1bxa['nearestPowerOfTwo'],
        _0x5f1bx1d = _0x5f1bxa['extendOptions'],
        _0x5f1bx1e = _0x5f1bxa['getBasePage'],
        _0x5f1bx1f = _0x5f1bxa['getScript'],
        _0x5f1bx20 = _0x5f1bxa['fixMouseEvent'],
        _0x5f1bx21 = _0x5f1bxa['prefix'],
        _0x5f1bx22 = _0x5f1bxa['isMobile'],
        _0x5f1bx23 = _0x5f1bxa['hasWebgl'],
        _0x5f1bx24 = _0x5f1bxa['__extends'],
        _0x5f1bx25 = function(a) {
            return _0x5f1bx3['extend'](!0, {}, _0x5f1bx5, a)
        },
        _0x5f1bx26 = function(_0x5f1bx5, _0x5f1bx7) {
            function _0x5f1bx18(a) {
                _0x5f1bx2b['removeClass']('PDFFlip-active')
            }

            function _0x5f1bx2a(a) {
                switch (a['keyCode']) {
                    case _0x5f1bx33:
                        _0x5f1bx31 = !1;
                        break;
                    case _0x5f1bx34:
                        _0x5f1bx30 = !1;
                        break;
                    case _0x5f1bx35:
                        _0x5f1bx32 = !1;
                        break;
                    case _0x5f1bx37:
                        _0x5f1bx7['prev']();
                        break;
                    case _0x5f1bx36:
                        _0x5f1bx7['next']()
                }
            }
            var _0x5f1bx8 = 'PDFFlip_XUI',
                _0x5f1bx9 = 'PDFFlip_XUI-wrap',
                _0x5f1bxa = _0x5f1bx8 + '-btn',
                _0x5f1bxb = _0x5f1bx7['ui'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bx8
                }),
                _0x5f1bxc = _0x5f1bx7['options'];
            _0x5f1bxb['dispose'] = function() {
                _0x5f1bx5['find']('.' + _0x5f1bxa)['each'](function() {
                    _0x5f1bx3(this)['off']()
                }), _0x5f1bx1f['remove'](), _0x5f1bx13['remove'](), _0x5f1bx6['remove'](), _0x5f1bx14['remove'](), _0x5f1bxf['remove'](), _0x5f1bxb['shareBox'] && (_0x5f1bxb['shareBox']['dispose'] && _0x5f1bxb['shareBox']['dispose'](), _0x5f1bxb['shareBox'] = null), document['removeEventListener']('keyup', _0x5f1bx2a, !1), window['removeEventListener']('click', _0x5f1bx18, !1), _0x5f1bx7 = null
            };
            var _0x5f1bxd = function(a) {
                    return isNaN(a) ? a = _0x5f1bx7['target']['_activePage'] : a < 1 ? a = 1 : a > _0x5f1bx7['target']['pageCount'] && (a = _0x5f1bx7['target']['pageCount']), a
                },
                _0x5f1bx14 = _0x5f1bxb['next'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-next ' + _0x5f1bxc['icons']['next'],
                    title: _0x5f1bxc['text']['nextPage'],
                    html: '<span>' + _0x5f1bxc['text']['nextPage'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['next']()
                }),
                _0x5f1bx6 = _0x5f1bxb['prev'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-prev ' + _0x5f1bxc['icons']['prev'],
                    title: _0x5f1bxc['text']['previousPage'],
                    html: '<span>' + _0x5f1bxc['text']['previousPage'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['prev']()
                }),
                _0x5f1bxf = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bx9 + ' ' + _0x5f1bx8 + '-zoom'
                }),
                _0x5f1bx10 = _0x5f1bxb['zoomIn'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-zoomin ' + _0x5f1bxc['icons']['zoomin'],
                    title: _0x5f1bxc['text']['zoomIn'],
                    html: '<span>' + _0x5f1bxc['text']['zoomIn'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['zoom'](!0), _0x5f1bxb['update'](), _0x5f1bx7['target']['startPoint'] && _0x5f1bx7['target']['pan'] && _0x5f1bx7['target']['pan'](_0x5f1bx7['target']['startPoint'])
                }),
                _0x5f1bx11 = _0x5f1bxb['zoomOut'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-zoomout ' + _0x5f1bxc['icons']['zoomout'],
                    title: _0x5f1bxc['text']['zoomOut'],
                    html: '<span>' + _0x5f1bxc['text']['zoomOut'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['zoom'](!1), _0x5f1bxb['update'](), _0x5f1bx7['target']['startPoint'] && _0x5f1bx7['target']['pan'] && _0x5f1bx7['target']['pan'](_0x5f1bx7['target']['startPoint'])
                });
            _0x5f1bxf['append'](_0x5f1bx10)['append'](_0x5f1bx11);
            var _0x5f1bx12 = _0x5f1bxb['pageNumber'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-page'
            })['on']('change', function() {
                var a = parseInt(_0x5f1bxb['pageInput']['val'](), 10);
                a = _0x5f1bxd(a), _0x5f1bx7['gotoPage'](a)
            })['on']('keyup', function(a) {
                if (13 == a['keyCode']) {
                    var _0x5f1bx3 = parseInt(_0x5f1bxb['pageInput']['val'](), 10);
                    _0x5f1bx3 = _0x5f1bxd(_0x5f1bx3), _0x5f1bx3 !== _0x5f1bxd(_0x5f1bx7['target']['_activePage'] || _0x5f1bx7['_activePage']) && _0x5f1bx7['gotoPage'](_0x5f1bx3)
                }
            });
            _0x5f1bxb['pageInput'] = _0x5f1bx3('<input id="df_book_page_number" type="text"/>')['appendTo'](_0x5f1bx12), _0x5f1bxb['pageLabel'] = _0x5f1bx3('<label for="df_book_page_number"/>')['appendTo'](_0x5f1bx12);
            var _0x5f1bx13 = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bx9 + ' ' + _0x5f1bx8 + '-size'
                }),
                _0x5f1bx17 = (_0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-help ' + _0x5f1bxc['icons']['help'],
                    title: _0x5f1bxc['text']['toggleHelp'],
                    html: '<span>' + _0x5f1bxc['text']['toggleHelp'] + '</span>'
                })['on']('click', function() {}), _0x5f1bxb['sound'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-sound ' + _0x5f1bxc['icons']['sound'],
                    title: _0x5f1bxc['text']['toggleSound'],
                    html: '<span>' + _0x5f1bxc['text']['toggleSound'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bxc['Page_Flip_Sound_Enable'] = !_0x5f1bxc['Page_Flip_Sound_Enable'], _0x5f1bxb['updateSound']()
                }));
            _0x5f1bxb['updateSound'] = function() {
                0 == _0x5f1bxc['Page_Flip_Sound_Enable'] || 'false' == _0x5f1bxc['Page_Flip_Sound_Enable'] ? _0x5f1bx17['addClass']('disabled') : _0x5f1bx17['removeClass']('disabled')
            }, _0x5f1bxb['updateSound']();
            var _0x5f1bx2b = _0x5f1bxb['more'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-more ' + _0x5f1bxc['icons']['more']
            })['on']('click', function(a) {
                _0x5f1bx2b['hasClass']('PDFFlip-active') || (_0x5f1bx3(this)['addClass']('PDFFlip-active'), a['stopPropagation']())
            });
            window['addEventListener']('click', _0x5f1bx18, !1);
            var _0x5f1bx16 = _0x5f1bx3(_0x5f1bxe['div'], {
                class: 'more-container'
            });
            if (_0x5f1bx2b['append'](_0x5f1bx16), 'string' == typeof _0x5f1bxc['source'] && 1 == _0x5f1bxc['Allow_PDF_Download']) {
                var _0x5f1bx19 = _0x5f1bxa + ' ' + _0x5f1bx8 + '-download ' + _0x5f1bxc['icons']['download'],
                    _0x5f1bx1a = _0x5f1bxb['download'] = _0x5f1bx3('<a download target="_blank" class="' + _0x5f1bx19 + '"><span>' + _0x5f1bxc['text']['downloadPDFFile'] + '</span></a>');
                _0x5f1bx1a['attr']('href', _0x5f1bxc['source'])['attr']('title', _0x5f1bxc['text']['downloadPDFFile'])
            };
            var _0x5f1bx1c = document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled'];
            _0x5f1bx1c || _0x5f1bx5['addClass']('PDFFlip-custom-fullscreen');
            var _0x5f1bx1d = _0x5f1bxb['fullScreen'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-fullscreen ' + _0x5f1bxc['icons']['fullscreen'],
                title: _0x5f1bxc['text']['toggleFullscreen'],
                html: '<span>' + _0x5f1bxc['text']['toggleFullscreen'] + '</span>'
            })['on']('click', function() {
                var _0x5f1bx5 = (document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement'], _0x5f1bx7['container'][0]);
                1 != _0x5f1bxb['isFullscreen'] ? (_0x5f1bx7['container']['addClass']('PDFFlip-fullscreen'), _0x5f1bx5['requestFullscreen'] ? _0x5f1bx5['requestFullscreen']() : _0x5f1bx5['msRequestFullscreen'] ? _0x5f1bx5['msRequestFullscreen']() : _0x5f1bx5['mozRequestFullScreen'] ? _0x5f1bx5['mozRequestFullScreen']() : _0x5f1bx5['webkitRequestFullscreen'] && _0x5f1bx5['webkitRequestFullscreen'](), _0x5f1bxb['isFullscreen'] = !0) : (_0x5f1bx7['container']['removeClass']('PDFFlip-fullscreen'), _0x5f1bxb['isFullscreen'] = !1, document['exitFullscreen'] ? document['exitFullscreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['webkitExitFullscreen'] && document['webkitExitFullscreen']()), setTimeout(function() {
                    _0x5f1bx3(window)['trigger']('resize')
                }, 50)
            });
            _0x5f1bxb['fit'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-fit ' + _0x5f1bxc['icons']['fitscreen']
            })['on']('click', function() {
                _0x5f1bx3(this)['toggleClass']('PDFFlip-button-fit-active')
            });
            _0x5f1bx13['append'](_0x5f1bx1d);
            var _0x5f1bx1f = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bx9 + ' ' + _0x5f1bx8 + '-controls'
            });
            _0x5f1bxb['shareBox'] = new a.Share(_0x5f1bx5, _0x5f1bxc), _0x5f1bxb['share'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-share ' + _0x5f1bxc['icons']['share'],
                title: _0x5f1bxc['text']['share'],
                html: '<span>' + _0x5f1bxc['text']['share'] + '</span>'
            })['on']('click', function(a) {
                1 == _0x5f1bxb['shareBox']['isOpen'] ? _0x5f1bxb['shareBox']['close']() : (_0x5f1bxb['shareBox']['update'](_0x5f1bx7['getURLHash']()), _0x5f1bxb['shareBox']['show']())
            }), _0x5f1bxb['startPage'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-start ' + _0x5f1bxc['icons']['start'],
                title: _0x5f1bxc['text']['gotoFirstPage'],
                html: '<span>' + _0x5f1bxc['text']['gotoFirstPage'] + '</span>'
            })['on']('click', function() {
                _0x5f1bx7['start']()
            }), _0x5f1bxb['endPage'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-end ' + _0x5f1bxc['icons']['end'],
                title: _0x5f1bxc['text']['gotoLastPage'],
                html: '<span>' + _0x5f1bxc['text']['gotoLastPage'] + '</span>'
            })['on']('click', function() {
                _0x5f1bx7['end']()
            }), _0x5f1bxb['pageMode'] = _0x5f1bx3(_0x5f1bxe['div'], {
                class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-pagemode ' + _0x5f1bxc['icons']['singlepage'],
                html: '<span>' + _0x5f1bxc['text']['singlePageMode'] + '</span>'
            })['on']('click', function() {
                var a = _0x5f1bx3(this);
                _0x5f1bx7['setPageMode'](!a['hasClass'](_0x5f1bxc['icons']['doublepage']))
            });
            _0x5f1bx7['setPageMode'](_0x5f1bx7['target']['pageMode'] == a['PAGE_MODE']['SINGLE']);
            for (var _0x5f1bx4 = (_0x5f1bxb['altPrev'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-prev ' + _0x5f1bx8 + '-alt ' + _0x5f1bxc['icons']['prev'],
                    title: _0x5f1bxc['text']['previousPage'],
                    html: '<span>' + _0x5f1bxc['text']['previousPage'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['prev']()
                }), _0x5f1bxb['altNext'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-next ' + _0x5f1bx8 + '-alt ' + _0x5f1bxc['icons']['next'],
                    title: _0x5f1bxc['text']['nextPage'],
                    html: '<span>' + _0x5f1bxc['text']['nextPage'] + '</span>'
                })['on']('click', function() {
                    _0x5f1bx7['next']()
                }), _0x5f1bxb['thumbnail'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-thumbnail ' + _0x5f1bxc['icons']['thumbnail'],
                    title: _0x5f1bxc['text']['toggleThumbnails'],
                    html: '<span>' + _0x5f1bxc['text']['toggleThumbnails'] + '</span>'
                })['on']('click', function() {
                    var a = _0x5f1bx3(this);
                    if (_0x5f1bx7['target']['thumbContainer']) {
                        var _0x5f1bx5 = _0x5f1bx7['target']['thumbContainer'];
                        _0x5f1bx5['toggleClass']('PDFFlip-thumb-visible'), a['toggleClass']('PDFFlip-active')
                    } else {
                        _0x5f1bx7['contentProvider']['initThumbs'](), a['toggleClass']('PDFFlip-active')
                    };
                    a['hasClass']('PDFFlip-active') && a['siblings']('.PDFFlip-active')['trigger']('click'), _0x5f1bxb['update'](!0)
                }), _0x5f1bxb['outline'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: _0x5f1bxa + ' ' + _0x5f1bx8 + '-outline ' + _0x5f1bxc['icons']['outline'],
                    title: _0x5f1bxc['text']['toggleOutline'],
                    html: '<span>' + _0x5f1bxc['text']['toggleOutline'] + '</span>'
                })['on']('click', function() {
                    var a = _0x5f1bx3(this);
                    if (_0x5f1bx7['target']['outlineContainer']) {
                        var _0x5f1bx5 = _0x5f1bx7['target']['outlineContainer'];
                        a['toggleClass']('PDFFlip-active'), _0x5f1bx5['toggleClass']('PDFFlip-TOC-visible'), a['hasClass']('PDFFlip-active') && a['siblings']('.PDFFlip-active')['trigger']('click'), _0x5f1bxb['update'](!0)
                    }
                }), _0x5f1bxc['allControls']['replace'](/ /g, '')['split'](',')), _0x5f1bx29 = ',' + _0x5f1bxc['mainControls']['replace'](/ /g, '') + ',', _0x5f1bx2c = ',' + _0x5f1bxc['hideControls']['replace'](/ /g, '') + ',', _0x5f1bx2d = 0; _0x5f1bx2d < _0x5f1bx4['length']; _0x5f1bx2d++) {
                var _0x5f1bx2e = _0x5f1bx4[_0x5f1bx2d];
                if (_0x5f1bx2c['indexOf'](',' + _0x5f1bx2e + ',') < 0) {
                    var _0x5f1bx2f = _0x5f1bxb[_0x5f1bx2e];
                    void(0) !== _0x5f1bx2f && (_0x5f1bx29['indexOf'](',' + _0x5f1bx2e + ',') > -1 ? _0x5f1bx1f['append'](_0x5f1bx2f) : 'more' !== _0x5f1bx2e && 'pageNumber' !== _0x5f1bx2e && _0x5f1bx16['append'](_0x5f1bx2f))
                }
            };
            _0x5f1bx5['append'](_0x5f1bx1f)['append'](_0x5f1bx6)['append'](_0x5f1bx14)['append'](_0x5f1bxf);
            var _0x5f1bx30 = !1,
                _0x5f1bx31 = !1,
                _0x5f1bx32 = !1,
                _0x5f1bx33 = 16,
                _0x5f1bx34 = 17,
                _0x5f1bx35 = 18,
                _0x5f1bx36 = 39,
                _0x5f1bx37 = 37;
            document['addEventListener']('keyup', _0x5f1bx2a, !1), _0x5f1bxb['update'] = function(_0x5f1bx3) {
                _0x5f1bx1b('ui update');
                var _0x5f1bx8 = _0x5f1bx7['target'],
                    _0x5f1bx9 = _0x5f1bxd(_0x5f1bx8['_activePage'] || _0x5f1bx7['_activePage']),
                    _0x5f1bxa = _0x5f1bx8['pageCount'] || _0x5f1bx7['pageCount'],
                    _0x5f1bxc = _0x5f1bx8['Flip_Direction'] == a['Flip_Direction']['RTL'],
                    _0x5f1bx14 = 1 == _0x5f1bx9 || 0 == _0x5f1bx9,
                    _0x5f1bxe = _0x5f1bx9 == _0x5f1bxa;
                _0x5f1bxb['next']['show'](), _0x5f1bxb['prev']['show'](), _0x5f1bxb['altNext']['removeClass']('disabled'), _0x5f1bxb['altPrev']['removeClass']('disabled'), (_0x5f1bx14 && !_0x5f1bxc || _0x5f1bxe && _0x5f1bxc) && (_0x5f1bxb['prev']['hide'](), _0x5f1bxb['altPrev']['addClass']('disabled')), (_0x5f1bxe && !_0x5f1bxc || _0x5f1bx14 && _0x5f1bxc) && (_0x5f1bxb['next']['hide'](), _0x5f1bxb['altNext']['addClass']('disabled')), _0x5f1bxb['pageInput']['val'](_0x5f1bx9), _0x5f1bxb['pageLabel']['html'](_0x5f1bx9 + '/' + _0x5f1bxa), _0x5f1bx5['find']('.PDFFlip-thumb-visible, .PDFFlip-TOC-visible')['length'] > 0 ? _0x5f1bx5['addClass']('PDFFlip-sidemenu-open') : _0x5f1bx5['removeClass']('PDFFlip-sidemenu-open'), 1 == _0x5f1bx3 && _0x5f1bx7['resize'](), _0x5f1bx8['contentProvider']['zoomScale'] == _0x5f1bx8['contentProvider']['maxZoom'] ? _0x5f1bxb['zoomIn']['addClass']('disabled') : _0x5f1bxb['zoomIn']['removeClass']('disabled'), 1 == _0x5f1bx8['contentProvider']['zoomScale'] ? _0x5f1bxb['zoomOut']['addClass']('disabled') : _0x5f1bxb['zoomOut']['removeClass']('disabled')
            }, void(0) !== _0x5f1bx7['target'] && (_0x5f1bx7['target']['ui'] = _0x5f1bxb), void(0) !== _0x5f1bxc['onCreateUI'] && _0x5f1bxc['onCreateUI']()
        },
        _0x5f1bx27 = function(_0x5f1bx3) {
            var _0x5f1bx7 = function() {
                MOCKUP['defaults']['anisotropy'] = 0, MOCKUP['defaults']['groundTexture'] = 'blank', THREE['skipPowerOfTwo'] = !0, _0x5f1bx4(), void(0) !== _0x5f1bx3 && _0x5f1bx3()
            };
            void(0) == window['MOCKUP'] ? _0x5f1bx1f(_0x5f1bx5['pdfjsWorkerSrc'] + '?ver=' + a['version'], function() {
                _0x5f1bx1f(_0x5f1bx5['pdfjsSrc'] + '?ver=' + a['version'], function() {
                    _0x5f1bx7()
                })
            }) : _0x5f1bx7()
        },
        _0x5f1bx28 = void(0),
        _0x5f1bx29 = function(_0x5f1bx5) {
            function _0x5f1bx7(_0x5f1bx3) {
                function _0x5f1bx7() {
                    setTimeout(function() {
                        _0x5f1bx5['resize']()
                    }, 50)
                }
                _0x5f1bx3 = _0x5f1bx3 || {}, this['type'] = 'PreviewObject';
                var _0x5f1bx5 = this;
                window['addEventListener']('resize', _0x5f1bx7, !1), this['sound'] = document['createElement']('audio'), this['sound']['setAttribute']('src', _0x5f1bx3['soundFile'] + '?ver=' + a['version']), this['sound']['setAttribute']('type', 'audio/mpeg'), this['dispose'] = function() {
                    this['container'] && this['container']['info'] && this['container']['info']['remove'] && this['container']['info']['remove'](), this['target'] && this['target']['dispose'] && this['target']['dispose'](), this['target'] = null, this['stage'] && this['stage']['dispose'] && this['stage']['dispose'](), this['stage'] = null, this['ui'] && this['ui']['dispose'] && this['ui']['dispose'](), this['ui'] = null, this['contentProvider'] && this['contentProvider']['dispose'] && this['contentProvider']['dispose'](), this['contentProvider'] = null, window['removeEventListener']('resize', _0x5f1bx7)
                }
            }
            return _0x5f1bx7['prototype'] = {
                start: function() {
                    this['target']['gotoPage'](this['target']['startPage'])
                },
                end: function() {
                    this['target']['gotoPage'](this['target']['endPage'])
                },
                next: function() {},
                prev: function() {},
                zoom: function(a) {
                    this['pendingZoom'] = !0, this['zoomDelta'] = a, this['resize'](), this['ui']['update']()
                },
                resize: function() {
                    var _0x5f1bx5 = this;
                    if (void(0) != _0x5f1bx5['target'] && void(0) != _0x5f1bx5['target']['ui'] && void(0) != _0x5f1bx5['target']['contentProvider'] && void(0) != _0x5f1bx5['target']['contentProvider']['viewport'] && void(0) != _0x5f1bx5['target']['stage']) {
                        var _0x5f1bx6, _0x5f1bxf, _0x5f1bx7 = this['target']['pageMode'] == a['PAGE_MODE']['SINGLE'],
                            _0x5f1bx8 = _0x5f1bx5['container']['hasClass']('PDFFlip-Geo'),
                            _0x5f1bx9 = _0x5f1bx5['target'],
                            _0x5f1bxb = _0x5f1bx9['stage'],
                            _0x5f1bxc = _0x5f1bx9['contentProvider'],
                            _0x5f1bxd = _0x5f1bxc['pageRatio'],
                            _0x5f1bxe = (_0x5f1bxc['zoomViewport'], 'css' !== _0x5f1bx9['mode']),
                            _0x5f1bx10 = _0x5f1bx3(window)['height'](),
                            _0x5f1bx11 = 1 == _0x5f1bx9['ui']['isFullscreen'] ? _0x5f1bx10 : this['options']['height'];
                        _0x5f1bx5['container']['height'](_0x5f1bx11), Math['min'](_0x5f1bx5['container']['height'](), _0x5f1bx10) == _0x5f1bx10 && (_0x5f1bx11 = _0x5f1bx10), _0x5f1bx5['container']['height'](_0x5f1bx11), _0x5f1bx11 = _0x5f1bx5['container']['height'](), _0x5f1bxe || (_0x5f1bxb['css']({
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            transform: 'translate3d(' + _0x5f1bx5['target']['left'] + 'px,' + _0x5f1bx5['target']['top'] + 'px,0)'
                        }), _0x5f1bx9['stageHeight'] = _0x5f1bxb['height']()), _0x5f1bx6 = _0x5f1bxb['width'](), _0x5f1bxf = _0x5f1bxb['height']();
                        var _0x5f1bx2b, _0x5f1bx19, _0x5f1bx1a, _0x5f1bx1d, _0x5f1bx12 = _0x5f1bx6,
                            _0x5f1bx13 = Math['min'](_0x5f1bxf, _0x5f1bx10),
                            _0x5f1bx15 = Math['floor'](_0x5f1bx7 ? _0x5f1bx12 : _0x5f1bx12 / 2),
                            _0x5f1bx17 = Math['floor'](_0x5f1bx15 / _0x5f1bxd);
                        if (_0x5f1bx2b = Math['min'](_0x5f1bx17, _0x5f1bx13), _0x5f1bx19 = Math['floor'](_0x5f1bx2b * _0x5f1bxd), _0x5f1bxc['maxZoom'] = _0x5f1bxc['zoomViewport']['height'] / _0x5f1bx2b, 1 == _0x5f1bx5['pendingZoom'] && void(0) !== _0x5f1bx5['zoomDelta']) {
                            _0x5f1bx5['pendingZoom'] = !1;
                            var _0x5f1bx1f, _0x5f1bx1e = _0x5f1bx5['zoomDelta'],
                                _0x5f1bx20 = Math['max'](_0x5f1bx2b, _0x5f1bx19),
                                _0x5f1bx21 = 1 == _0x5f1bxc['zoomScale'],
                                _0x5f1bx22 = _0x5f1bx18(_0x5f1bx21 ? _0x5f1bxc['zoomScale'] : _0x5f1bxc['zoomScale'] + _0x5f1bx1e, 1, _0x5f1bxc['maxZoom']);
                            _0x5f1bx1f = _0x5f1bx1e > 0 ? _0x5f1bx1c(_0x5f1bx20 * _0x5f1bx22) : _0x5f1bxa['lowerPowerOfTwo'](_0x5f1bx20 * _0x5f1bx22), _0x5f1bxc['zoomScale'] = _0x5f1bx18(_0x5f1bx1e > 0 ? _0x5f1bx5['options']['zoomRatio'] * _0x5f1bxc['zoomScale'] : _0x5f1bxc['zoomScale'] / _0x5f1bx5['options']['zoomRatio'], 1, _0x5f1bxc['maxZoom']), _0x5f1bx5['zoomDelta'] = void(0)
                        };
                        _0x5f1bx1d = 1 == _0x5f1bxc['zoomScale'] || void(0) == _0x5f1bxc['zoomScale'] ? 1 : _0x5f1bxc['zoomScale'], _0x5f1bxc['checkViewportSize'](_0x5f1bx19 * _0x5f1bx1d, _0x5f1bx2b * _0x5f1bx1d), 1 != _0x5f1bxc['zoomScale'] ? this['target']['container']['addClass']('PDFFlip-zoom-enabled') : this['target']['container']['removeClass']('PDFFlip-zoom-enabled');
                        _0x5f1bxc['maxZoom'];
                        if (_0x5f1bxe) {
                            _0x5f1bx2b = _0x5f1bx11;
                            var _0x5f1bx24 = _0x5f1bx5['container']['find']('.PDFFlip_XUI-controls')['height']();
                            (null == _0x5f1bx24 || _0x5f1bx8) && (_0x5f1bx24 = 0), _0x5f1bxb['canvas']['height'](_0x5f1bx2b - _0x5f1bx24), _0x5f1bx5['container']['hasClass']('PDFFlip-sidemenu-open') && (_0x5f1bx6 -= 220), _0x5f1bxb['resizeCanvas'](_0x5f1bx6, _0x5f1bx2b - _0x5f1bx24);
                            var _0x5f1bx25 = _0x5f1bx9['height'],
                                _0x5f1bx26 = _0x5f1bx6 * _0x5f1bx25 / _0x5f1bx2b,
                                _0x5f1bx27 = _0x5f1bx6 / _0x5f1bx2b,
                                _0x5f1bx28 = _0x5f1bx9['width'] * (_0x5f1bx7 ? 1 : 2),
                                _0x5f1bx4 = _0x5f1bx26 < _0x5f1bx28 ? _0x5f1bx28 / _0x5f1bx27 : _0x5f1bx9['height'],
                                _0x5f1bx29 = _0x5f1bx5['options']['minTopOffset'] + (_0x5f1bx8 ? 60 : 30),
                                _0x5f1bx2c = 1 == _0x5f1bx1d ? _0x5f1bx2b / (_0x5f1bx2b - _0x5f1bx29) : _0x5f1bx25 / _0x5f1bx4;
                            _0x5f1bx1a = 1 / (2 * Math['tan'](Math['PI'] * _0x5f1bxb['camera']['fov'] * 0.5 / 180) / (_0x5f1bx4 / (_0x5f1bx1d / _0x5f1bx2c))), _0x5f1bxb['camera']['updateProjectionMatrix'](), _0x5f1bxb['renderRequestPending'] = !0, _0x5f1bxb['camera']['position']['z'] = _0x5f1bx1a;
                            var _0x5f1bx2d = _0x5f1bx29 / 2 - _0x5f1bx5['options']['minTopOffset'];
                            _0x5f1bx5['target']['position']['y'] = _0x5f1bx2d * _0x5f1bx25 / (_0x5f1bx5['container']['height']() - _0x5f1bx29), _0x5f1bxb['cssScene']['position']['y'] = _0x5f1bx5['target']['position']['y'], 1 == _0x5f1bxc['zoomScale'] && (_0x5f1bxb['camera']['position']['set'](0, 0, _0x5f1bx1a), _0x5f1bxb['orbitControl']['target'] = new THREE.Vector3(0, 0, 0)), _0x5f1bxb['orbitControl']['update'](), _0x5f1bxb['orbitControl']['mouseButtons']['ORBIT'] = 1 != _0x5f1bx1d ? -1 : THREE['MOUSE']['RIGHT'], _0x5f1bxb['orbitControl']['mouseButtons']['PAN'] = 1 != _0x5f1bx1d ? THREE['MOUSE']['LEFT'] : -1
                        } else {
                            if (void(0) !== _0x5f1bx9) {
                                _0x5f1bx9['pageWidth'] = Math['floor'](_0x5f1bx19), _0x5f1bx9['fullWidth'] = 2 * _0x5f1bx9['pageWidth'], _0x5f1bx9['height'] = _0x5f1bx2b;
                                var _0x5f1bx2e = _0x5f1bx9['stage']['innerWidth']() - _0x5f1bx9['stage']['width'](),
                                    _0x5f1bx2f = _0x5f1bx9['stage']['innerHeight']() - _0x5f1bx9['stage']['height'](),
                                    _0x5f1bx30 = _0x5f1bx9['shiftHeight'] = _0x5f1bx18((_0x5f1bx2b * _0x5f1bx1d - (_0x5f1bx11 - _0x5f1bx2f)) / 2, 0, _0x5f1bx9['height'] * _0x5f1bx1d),
                                    _0x5f1bx31 = _0x5f1bx9['shiftWidth'] = _0x5f1bx18(1 == _0x5f1bx1d ? 1 : (_0x5f1bx9['fullWidth'] * _0x5f1bx1d - _0x5f1bx9['container']['width']() + _0x5f1bx2e) / 2, 0, _0x5f1bx9['fullWidth'] * _0x5f1bx1d);
                                _0x5f1bx9['stage']['css']({
                                    top: -_0x5f1bx30,
                                    bottom: -_0x5f1bx30,
                                    right: -_0x5f1bx31,
                                    left: -_0x5f1bx31,
                                    transform: 'translate3d(' + _0x5f1bx9['left'] + 'px,' + _0x5f1bx9['top'] + 'px,0)'
                                });
                                _0x5f1bx9['stage']['innerHeight']();
                                _0x5f1bx9['wrapper']['css']({
                                    width: _0x5f1bx9['fullWidth'] * _0x5f1bx1d,
                                    height: _0x5f1bx2b * _0x5f1bx1d,
                                    marginTop: _0x5f1bx11 - _0x5f1bx2b * _0x5f1bx1d - _0x5f1bx2f > 0 ? (_0x5f1bx11 - _0x5f1bx2f - _0x5f1bx2b * _0x5f1bx1d) / 2 : 0
                                });
                                var _0x5f1bx33 = Math['floor'](_0x5f1bx16(_0x5f1bx19, _0x5f1bx2b)) * _0x5f1bx1d;
                                _0x5f1bx9['stage']['find']('.PDFFlip-page-wrapper')['width'](_0x5f1bx33)['height'](_0x5f1bx33), _0x5f1bx9['stage']['find']('.PDFFlip-book-page, .PDFFlip-page-front , .PDFFlip-page-back, .PDFFlip-page-fold-inner-shadow')['height'](_0x5f1bx2b * _0x5f1bx1d)['width'](_0x5f1bx19 * _0x5f1bx1d)
                            }
                        };
                        this['checkCenter'](), _0x5f1bx9['thumblist'] && _0x5f1bx9['thumblist']['reset'](_0x5f1bx3(_0x5f1bx9['thumblist']['container'])['height']());
                        var _0x5f1bx34 = _0x5f1bx5['container']['width']();
                        _0x5f1bx34 < 400 ? _0x5f1bx5['container']['addClass']('PDFFlip-xs') : _0x5f1bx5['container']['removeClass']('PDFFlip-xs')
                    }
                },
                playSound: function() {
                    try {
                        this['options'] && 1 == this['options']['Page_Flip_Sound_Enable'] && (this['sound']['currentTime'] = 0, this['sound']['play']())
                    } catch (a) {}
                },
                setPageMode: function(_0x5f1bx3) {
                    1 == _0x5f1bx3 ? (this['ui']['pageMode']['addClass'](this['options']['icons']['doublepage']), this['ui']['pageMode']['html']('<span>' + this['options']['text']['doublePageMode'] + '</span>'), this['ui']['pageMode']['attr']('title', this['options']['text']['doublePageMode']), this['target']['pageMode'] = a['PAGE_MODE']['SINGLE']) : (this['ui']['pageMode']['removeClass'](this['options']['icons']['doublepage']), this['ui']['pageMode']['html']('<span>' + this['options']['text']['singlePageMode'] + '</span>'), this['ui']['pageMode']['attr']('title', this['options']['text']['singlePageMode']), this['target']['pageMode'] = a['PAGE_MODE']['DOUBLE']), this['resize']()
                },
                height: function(a) {
                    return void(0) == a ? this['container']['height']() : (this['options']['height'] = a, this['container']['height'](a), this['resize'](), void(0))
                },
                checkCenter: function() {
                    this['centerType'] = this['centerType'] || 'start';
                    var _0x5f1bxe, _0x5f1bx3 = this['target'],
                        _0x5f1bx5 = 0,
                        _0x5f1bx7 = 0,
                        _0x5f1bx8 = 0,
                        _0x5f1bx9 = _0x5f1bxa['getBasePage'](_0x5f1bx3._activePage),
                        _0x5f1bxb = _0x5f1bx3['_activePage'] % 2 == 0,
                        _0x5f1bxc = _0x5f1bx3['Flip_Direction'] == a['Flip_Direction']['RTL'],
                        _0x5f1bxd = _0x5f1bx3['pageMode'] == a['PAGE_MODE']['SINGLE'],
                        _0x5f1bx14 = _0x5f1bx3['stage']['width']();
                    if ('css' == _0x5f1bx3['mode']) {
                        _0x5f1bxe = _0x5f1bx3['wrapper']['width'](), _0x5f1bx5 = Math['max']((_0x5f1bxe - _0x5f1bx14) / 2, 0), _0x5f1bx7 = -_0x5f1bxe / 4, _0x5f1bx8 = _0x5f1bxe / 4, 0 == _0x5f1bx9 ? (_0x5f1bx3['wrapper']['css']({
                            left: _0x5f1bxd ? _0x5f1bxc ? _0x5f1bx8 - _0x5f1bx5 : _0x5f1bx7 - _0x5f1bx5 : _0x5f1bxc ? _0x5f1bx8 : _0x5f1bx7
                        }), _0x5f1bx3['shadow']['css']({
                            width: '50%',
                            left: _0x5f1bxc ? 0 : '50%',
                            transitionDelay: ''
                        })) : _0x5f1bx9 == _0x5f1bx3['pageCount'] ? (_0x5f1bx3['wrapper']['css']({
                            left: _0x5f1bxd ? _0x5f1bxc ? _0x5f1bx7 - _0x5f1bx5 : _0x5f1bx8 - _0x5f1bx5 : _0x5f1bxc ? _0x5f1bx7 : _0x5f1bx8
                        }), _0x5f1bx3['shadow']['css']({
                            width: '50%',
                            left: _0x5f1bxc ? '50%' : 0,
                            transitionDelay: ''
                        })) : (_0x5f1bx3['wrapper']['css']({
                            left: _0x5f1bxd ? _0x5f1bxc ? _0x5f1bxb ? _0x5f1bx7 - _0x5f1bx5 : _0x5f1bx8 - _0x5f1bx5 : _0x5f1bxb ? _0x5f1bx8 - _0x5f1bx5 : _0x5f1bx7 - _0x5f1bx5 : 0
                        }), _0x5f1bx3['shadow']['css']({
                            width: '100%',
                            left: 0,
                            transitionDelay: parseInt(_0x5f1bx3['duration'], 10) + 50 + 'ms'
                        }))
                    } else {
                        if (void(0) !== _0x5f1bx3['stage']) {
                            var _0x5f1bxf, _0x5f1bx6 = _0x5f1bx3['position']['x'];
                            _0x5f1bx5 = _0x5f1bx3['width'] / 4, _0x5f1bxe = _0x5f1bx3['width'], _0x5f1bx7 = -_0x5f1bxe / 2, _0x5f1bx8 = _0x5f1bxe / 2, _0x5f1bxf = 0 == _0x5f1bx9 ? _0x5f1bxc ? _0x5f1bx8 : _0x5f1bx7 : _0x5f1bx9 == _0x5f1bx3['pageCount'] ? _0x5f1bxc ? _0x5f1bx7 : _0x5f1bx8 : _0x5f1bxd ? _0x5f1bxc ? _0x5f1bxb ? _0x5f1bx7 : _0x5f1bx8 : _0x5f1bxb ? _0x5f1bx8 : _0x5f1bx7 : 0, _0x5f1bxf !== this['centerEnd'] && (this['centerTween'] = new TWEEN.Tween({
                                x: _0x5f1bx6
                            })['delay'](0)['to']({
                                x: _0x5f1bxf
                            }, _0x5f1bx3['duration'])['onUpdate'](function() {
                                _0x5f1bx3['position']['x'] = this['x'], _0x5f1bx3['stage']['cssScene']['position']['x'] = this['x']
                            })['easing'](_0x5f1bx3['ease'])['start'](), this['centerEnd'] = _0x5f1bxf)
                        }
                    }
                },
                width: function(a) {
                    return void(0) == a ? this['container']['width']() : (this['options']['width'] = a, this['container']['width'](a), this['resize'](), void(0))
                }
            }, _0x5f1bx7
        }({});
    a['PreviewObject'] = _0x5f1bx29;
    var _0x5f1bx2c = function(_0x5f1bx7) {
            function _0x5f1bx9(_0x5f1bx7, _0x5f1bx8, _0x5f1bx9, _0x5f1bxa) {
                _0x5f1bx9 = _0x5f1bx9 || {};
                var _0x5f1bxc = this;
                if (_0x5f1bxc['contentRawSource'] = _0x5f1bx7 || [_0x5f1bx5['textureLoadFallback']], _0x5f1bxc['contentSource'] = _0x5f1bxc['contentRawSource'], _0x5f1bxc['contentSourceType'] = void(0), _0x5f1bxc['minDimension'] = _0x5f1bx9['minTextureSize'] || 512, _0x5f1bxc['maxDimension'] = _0x5f1bx9['maxTextureSize'] || 2048, _0x5f1bxc['flipbook'] = _0x5f1bxa, _0x5f1bxc['waitPeriod'] = 50, _0x5f1bxc['enableDebug'] = !1, _0x5f1bxc['zoomScale'] = 1, _0x5f1bxc['maxZoom'] = 2, _0x5f1bxc['options'] = _0x5f1bx9, _0x5f1bxc['outline'] = _0x5f1bx9['outline'], _0x5f1bxc['links'] = _0x5f1bx9['links'], _0x5f1bxc['html'] = _0x5f1bx9['html'], _0x5f1bxc['isCrossOrigin'] = _0x5f1bx9['isCrossOrigin'], _0x5f1bxc['normalViewport'] = {
                        height: 297,
                        width: 210,
                        scale: 1
                    }, _0x5f1bxc['viewport'] = {
                        height: 297,
                        width: 210,
                        scale: 1
                    }, _0x5f1bxc['zoomViewport'] = {
                        height: 297,
                        width: 210
                    }, _0x5f1bxc['thumbsize'] = 128, _0x5f1bxc['cacheIndex'] = 512, _0x5f1bxc['cache'] = [], _0x5f1bxc['pageRatio'] = _0x5f1bx9['pageRatio'] || _0x5f1bxc['viewport']['width'] / _0x5f1bxc['viewport']['height'], _0x5f1bxc['textureLoadTimeOut'] = void(0), _0x5f1bxc['type'] = 'TextureLibrary', Array === _0x5f1bxc['contentSource']['constructor'] || Array['isArray'](_0x5f1bxc['contentSource']) || _0x5f1bxc['contentSource'] instanceof Array) {
                    _0x5f1bxc['contentSourceType'] = _0x5f1bxb['IMAGE'], _0x5f1bxc['pageCount'] = _0x5f1bxc['contentSource']['length'], _0x5f1bx3('<img/>')['attr']('src', _0x5f1bxc['contentSource'][0])['on']('load', function() {
                        _0x5f1bxc['viewport']['height'] = this['height'], _0x5f1bxc['viewport']['width'] = this['width'], _0x5f1bxc['pageRatio'] = _0x5f1bxc['viewport']['width'] / _0x5f1bxc['viewport']['height'], _0x5f1bxc['zoomViewport'] = {
                            width: (_0x5f1bxc['pageRatio'] > 1 ? 1 : _0x5f1bxc['pageRatio']) * _0x5f1bxc['maxDimension'],
                            height: _0x5f1bxc['maxDimension'] / (_0x5f1bxc['pageRatio'] < 1 ? 1 : _0x5f1bxc['pageRatio'])
                        }, _0x5f1bxc['linkService'] = new PDFLinkService, _0x5f1bx3(this)['off'](), void(0) != _0x5f1bx8 && _0x5f1bx8(_0x5f1bxc), _0x5f1bx1b(this['height'] + ':' + this['width'])
                    })
                } else {
                    if ('string' == typeof _0x5f1bxc['contentSource'] || _0x5f1bxc['contentSource'] instanceof String) {
                        var _0x5f1bxd = function() {
                                PDFJS['workerSrc'] = _0x5f1bx5['pdfjsWorkerSrc'], _0x5f1bxc['contentSourceType'] = _0x5f1bxb['PDF'], PDFJS['disableAutoFetch'] = !0, PDFJS['disableStream'] = !0, PDFJS['externalLinkTarget'] = PDFJS['LinkTarget']['BLANK'];
                                var _0x5f1bx3 = PDFJS['getDocument'](_0x5f1bx7);
                                _0x5f1bx3['then'](function(_0x5f1bx5) {
                                    _0x5f1bxc['pdfDocument'] = _0x5f1bx5, _0x5f1bx5['getPage'](1)['then'](function(_0x5f1bx3) {
                                        _0x5f1bxc['normalViewport'] = _0x5f1bx3['getViewport'](1), _0x5f1bxc['viewport'] = _0x5f1bx3['getViewport'](1), _0x5f1bxc['viewport']['height'] = _0x5f1bxc['viewport']['height'] / 10, _0x5f1bxc['viewport']['width'] = _0x5f1bxc['viewport']['width'] / 10, _0x5f1bxc['pageRatio'] = _0x5f1bxc['viewport']['width'] / _0x5f1bxc['viewport']['height'], _0x5f1bxc['zoomViewport'] = {
                                            width: (_0x5f1bxc['pageRatio'] > 1 ? 1 : _0x5f1bxc['pageRatio']) * _0x5f1bxc['maxDimension'],
                                            height: _0x5f1bxc['maxDimension'] / (_0x5f1bxc['pageRatio'] < 1 ? 1 : _0x5f1bxc['pageRatio'])
                                        }, _0x5f1bxc['refPage'] = _0x5f1bx3, _0x5f1bx5['numPages'] > 1 ? _0x5f1bx5['getPage'](2)['then'](function(_0x5f1bx3) {
                                            if (_0x5f1bxc['options']['pageSize'] == a['PAGE_SIZE']['AUTO']) {
                                                var _0x5f1bx7 = _0x5f1bx3['getViewport'](1);
                                                _0x5f1bx7['width'] > 1.5 * _0x5f1bxc['normalViewport']['width'] ? (_0x5f1bxc['options']['pageSize'] = a['PAGE_SIZE']['DOUBLEINTERNAL'], _0x5f1bxc['pageCount'] = 2 * _0x5f1bx5['numPages'] - 2) : _0x5f1bxc['options']['pageSize'] = a['PAGE_SIZE']['SINGLE']
                                            };
                                            void(0) != _0x5f1bx8 && _0x5f1bx8(_0x5f1bxc)
                                        }) : void(0) != _0x5f1bx8 && _0x5f1bx8(_0x5f1bxc)
                                    }), _0x5f1bxc['linkService'] = new PDFLinkService, _0x5f1bxc['linkService']['setDocument'](_0x5f1bx5, null), _0x5f1bxc['pageCount'] = _0x5f1bx5['numPages'], _0x5f1bxc['contentSource'] = _0x5f1bx5
                                }, function(_0x5f1bx3) {
                                    var _0x5f1bx5 = '',
                                        _0x5f1bx7 = document['createElement']('a');
                                    _0x5f1bx7['href'] = _0x5f1bxc['contentSource'], _0x5f1bx7['hostname'] !== window['location']['hostname'] && (_0x5f1bx5 = 'Loading Error. '), _0x5f1bxc['updateInfo'](_0x5f1bx5 + 'PDF File Path Error. ' + _0x5f1bxc['contentSource'])
                                }), _0x5f1bx3['onProgress'] = function(_0x5f1bx3) {
                                    var _0x5f1bx5 = 100 * _0x5f1bx3['loaded'] / _0x5f1bx3['total'];
                                    isNaN(_0x5f1bx5) ? _0x5f1bx3 && _0x5f1bx3['loaded'] ? _0x5f1bxc['updateInfo']('PDF Loading ' + (Math['ceil'](_0x5f1bx3['loaded'] / 1e4) / 100).toString() + 'MB') : _0x5f1bxc['updateInfo']('PDF Loading ...') : _0x5f1bxc['updateInfo']('PDF Loading ' + _0x5f1bx5.toString()['split']('.')[0] + '%')
                                }
                            },
                            _0x5f1bx14 = function() {
                                _0x5f1bx5['pdfjsWorkerSrc'] += '?ver=' + a['version'], _0x5f1bxc['updateInfo']('PDF Loading');
                                var _0x5f1bx7 = document['createElement']('a');
                                _0x5f1bx7['href'] = _0x5f1bx5['pdfjsWorkerSrc'], _0x5f1bx7['hostname'] !== window['location']['hostname'] ? (_0x5f1bxc['updateInfo']('PDF Loading'), _0x5f1bx3['ajax']({
                                    url: _0x5f1bx5['pdfjsWorkerSrc'],
                                    cache: !0,
                                    success: function(_0x5f1bx3) {
                                        _0x5f1bx5['pdfjsWorkerSrc'] = a['createObjectURL'](_0x5f1bx3, 'text/javascript'), _0x5f1bxd()
                                    }
                                })) : _0x5f1bxd()
                            };
                        void(0) == window['PDFJS'] ? (_0x5f1bxc['updateInfo']('Loading PDF Service ...'), _0x5f1bx1f(_0x5f1bx5['pdfjsCompatibilitySrc'] + '?ver=' + a['version'], function() {
                            _0x5f1bx1f(_0x5f1bx5['pdfjsSrc'] + '?ver=' + a['version'], function() {
                                'function' == typeof define && define['amd'] ? (_0x5f1bxc['updateInfo']('Loading PDF Service (require) ...'), require(['pdfjs-dist/build/pdf'], function(a) {
                                    _0x5f1bx14()
                                })) : _0x5f1bx14()
                            }, function() {
                                _0x5f1bxc['updateInfo']('Unable to load PDF service..')
                            })
                        })) : _0x5f1bxd()
                    } else {
                        console['error']('Unknown source type. Please check documentation for help')
                    }
                };
                return this['dispose'] = function() {
                    this['targetObject'] && (this['targetObject']['dispose'] && this['targetObject']['dispose'](), this['targetObject']['processPage'] = null, this['targetObject']['requestPage'] = null), this['pdfDocument'] && this['pdfDocument']['destroy'] && this['pdfDocument']['destroy'](), this['linkService'] && this['linkService']['dispose'] && this['linkService']['dispose'](), this['outlineViewer'] && this['outlineViewer']['dispose'] && this['outlineViewer']['dispose'](), this['thumblist'] && this['thumblist']['dispose'] && this['thumblist']['dispose'](), this['targetObject'] = null, this['pdfDocument'] = null, this['linkService'] = null, this['outlineViewer'] = null, this['thumblist'] = null
                }, this
            }
            _0x5f1bx24(_0x5f1bx9, _0x5f1bx7);
            var _0x5f1bx8 = void(0);
            return _0x5f1bx9['prototype']['updateInfo'] = function(a) {
                this['flipbook'] && this['flipbook']['updateInfo'] && this['flipbook']['updateInfo'](a)
            }, _0x5f1bx9['prototype']['initThumbs'] = function() {
                var a = this;
                void(0) == a['cache'][a['thumbsize']] && (a['cache'][a['thumbsize']] = []);
                var _0x5f1bx5, _0x5f1bx7 = function() {
                        clearTimeout(_0x5f1bx5), _0x5f1bx5 = setTimeout(function() {
                            _0x5f1bx5 = setTimeout(_0x5f1bx8, a['waitPeriod'] / 2)
                        }, a['waitPeriod'])
                    },
                    _0x5f1bx8 = function() {
                        var _0x5f1bx8 = 0;
                        Date['now']() - a['thumblist']['lastScrolled'] < 100 ? _0x5f1bx8 = 1 : (a['targetObject']['container']['find']('.PDFFlip-thumb-container .PDFFlip-vrow')['each'](function() {
                            var _0x5f1bx5 = _0x5f1bx3(this);
                            if (!_0x5f1bx5['hasClass']('PDFFlip-thumb-loaded')) {
                                _0x5f1bx8++;
                                var _0x5f1bx9 = _0x5f1bx3(this)['attr']('id')['replace']('PDFFlip-thumb', '');
                                return a['getPage'](_0x5f1bx9, _0x5f1bx7, !0), _0x5f1bx5['addClass']('PDFFlip-thumb-loaded'), !1
                            }
                        }), 0 == _0x5f1bx8 && clearTimeout(_0x5f1bx5)), _0x5f1bx8 > 0 && _0x5f1bx7()
                    };
                a['thumblist'] = a['targetObject']['thumblist'] = new ThumbList({
                    h: 500,
                    addFn: function(a) {},
                    scrollFn: _0x5f1bx7,
                    itemHeight: 128,
                    totalRows: a['pageCount'],
                    generatorFn: function(a) {
                        var _0x5f1bx3 = document['createElement']('div'),
                            _0x5f1bx5 = a + 1;
                        _0x5f1bx3['id'] = 'PDFFlip-thumb' + _0x5f1bx5;
                        var _0x5f1bx7 = document['createElement']('div');
                        return _0x5f1bx7['innerHTML'] = _0x5f1bx5, _0x5f1bx3['appendChild'](_0x5f1bx7), _0x5f1bx3
                    }
                }), a['thumblist']['lastScrolled'] = Date['now'](), _0x5f1bx7(), a['targetObject']['thumbContainer'] = _0x5f1bx3(a['thumblist']['container'])['addClass']('PDFFlip-thumb-container PDFFlip-thumb-visible'), a['targetObject']['container']['append'](a['targetObject']['thumbContainer']), a['thumblist']['reset'](_0x5f1bx3(a['thumblist']['container'])['height']()), a['targetObject']['container']['on']('click', '.PDFFlip-thumb-container .PDFFlip-vrow', function(_0x5f1bx5) {
                    _0x5f1bx5['stopPropagation']();
                    var _0x5f1bx7 = _0x5f1bx3(this)['attr']('id')['replace']('PDFFlip-thumb', '');
                    a['targetObject']['gotoPage'](parseInt(_0x5f1bx7, 10))
                })
            }, _0x5f1bx9['prototype']['initOutline'] = function() {
                function _0x5f1bx7(_0x5f1bx3) {
                    if (1 == a['options']['overwritePDFOutline'] && (_0x5f1bx3 = []), _0x5f1bx3 = _0x5f1bx3 || [], a['outline']) {
                        for (var _0x5f1bx5 = 0; _0x5f1bx5 < a['outline']['length']; _0x5f1bx5++) {
                            a['outline'][_0x5f1bx5]['custom'] = !0, _0x5f1bx3 && _0x5f1bx3['push'](a['outline'][_0x5f1bx5])
                        }
                    };
                    a['outlineViewer']['render']({
                        outline: _0x5f1bx3
                    })
                }
                var a = this,
                    _0x5f1bx5 = _0x5f1bx3('<div>')['addClass']('PDFFlip-TOC-container');
                a['targetObject']['container']['append'](_0x5f1bx5), a['targetObject']['outlineContainer'] = _0x5f1bx5, a['outlineViewer'] = new BookMarkViewer({
                    container: _0x5f1bx5[0],
                    linkService: a['linkService'],
                    outlineItemClass: 'PDFFlip-TOC-item',
                    outlineToggleClass: 'PDFFlip-TOC_activate',
                    outlineToggleHiddenClass: 'PDFFlip-TOCs-hidden'
                }), a['pdfDocument'] ? a['pdfDocument']['getOutline']()['then'](function(a) {
                    _0x5f1bx7(a)
                }) : _0x5f1bx7([]), 1 == a['options']['Open_Table_of_Contents_on_Start'] && a['targetObject']['ui']['outline']['trigger']('click')
            }, _0x5f1bx9['prototype']['checkViewportSize'] = function(a, _0x5f1bx3) {
                var _0x5f1bx5 = this,
                    _0x5f1bx7 = _0x5f1bx5['targetObject'],
                    _0x5f1bx8 = _0x5f1bx5['cacheIndex'];
                if (_0x5f1bx5['contentSourceType'] == _0x5f1bxb['PDF']) {
                    if (_0x5f1bx5['viewport'] = 'css' == _0x5f1bx7['mode'] ? _0x5f1bx5['refPage']['getViewport'](_0x5f1bx3 / _0x5f1bx5['normalViewport']['height']) : _0x5f1bx5['refPage']['getViewport'](300 / _0x5f1bx5['normalViewport']['height']), _0x5f1bx5['cacheIndex'] = _0x5f1bx1c(Math['max'](a, _0x5f1bx3)), _0x5f1bx5['cacheIndex'] = _0x5f1bx18(_0x5f1bx5['cacheIndex'], _0x5f1bx5['minDimension'], _0x5f1bx5['maxDimension']), _0x5f1bx5['cacheScale'] = _0x5f1bx5['cacheIndex'] / Math['max'](_0x5f1bx5['normalViewport']['width'], _0x5f1bx5['normalViewport']['height']), void(0) == _0x5f1bx5['cache'][_0x5f1bx5['cacheIndex']] && (_0x5f1bx5['cache'][_0x5f1bx5['cacheIndex']] = []), _0x5f1bx8 !== _0x5f1bx5['cacheIndex']) {
                        for (var _0x5f1bx9 = 0; _0x5f1bx9 < _0x5f1bx7['children']['length']; _0x5f1bx9++) {
                            var _0x5f1bxa = _0x5f1bx7['children'][_0x5f1bx9];
                            _0x5f1bxa['name'] = '-1'
                        };
                        _0x5f1bx7['refresh']()
                    };
                    var _0x5f1bxc = _0x5f1bx7['container']['find']('.linkAnnotation');
                    _0x5f1bxc['css']({
                        transform: 'matrix(' + _0x5f1bx5['viewport']['clone']({
                            dontFlip: !0
                        })['transform']['join'](',') + ')'
                    })
                } else {
                    void(0) == _0x5f1bx5['cache'][_0x5f1bx5['cacheIndex']] && (_0x5f1bx5['cache'][_0x5f1bx5['cacheIndex']] = [])
                }
            }, _0x5f1bx9['prototype']['getCache'] = function(a, _0x5f1bx3) {
                return 1 == _0x5f1bx3 ? void(0) == this['cache'][this['thumbsize']] ? void(0) : this['cache'][this['thumbsize']][a] : void(0) == this['cache'][this['cacheIndex']] ? void(0) : this['cache'][this['cacheIndex']][a]
            }, _0x5f1bx9['prototype']['setCache'] = function(a, _0x5f1bx3, _0x5f1bx5, _0x5f1bx7) {
                if (1 == _0x5f1bx5) {
                    void(0) != this['cache'][this['thumbsize']] && (this['cache'][this['thumbsize']][a] = _0x5f1bx3)
                } else {
                    var _0x5f1bx8 = void(0) == _0x5f1bx7 ? this['cacheIndex'] : _0x5f1bx7;
                    void(0) != this['cache'][_0x5f1bx8] && (this['cache'][_0x5f1bx8][a] = _0x5f1bx3)
                }
            }, _0x5f1bx9['prototype']['setTarget'] = function(a) {
                var _0x5f1bx3 = this;
                return void(0) == a ? this['targetObject'] : (this['targetObject'] = a, a['contentProvider'] = this, a['container']['removeClass']('PDFFlip-loading PDFFlip-init'), void(0) !== _0x5f1bx3['linkService'] && (_0x5f1bx3['linkService']['setViewer'](a), _0x5f1bx3['initOutline']()), a['processPage'] = function(a, _0x5f1bx7) {
                    a > 0 && a <= _0x5f1bx3['pageCount'] ? _0x5f1bx3['getPage'](a, _0x5f1bx7) : _0x5f1bx3['setPage'](a, _0x5f1bx5['textureLoadFallback'], _0x5f1bx7)
                }, a['requestPage'] = function(a) {
                    _0x5f1bx3['setPage'](a, _0x5f1bx5['textureLoadFallback']), _0x5f1bx3['review']('Request')
                }, void(0) !== a['resize'] && a['resize'](), void(0))
            }, _0x5f1bx9['prototype']['review'] = function(a) {
                var _0x5f1bx3 = this;
                a = a || 'timer review', clearTimeout(_0x5f1bx8), _0x5f1bx8 = setTimeout(function() {
                    _0x5f1bx8 = setTimeout(_0x5f1bx3['reviewPages'], _0x5f1bx3['waitPeriod'] / 2, _0x5f1bx3, a)
                }, _0x5f1bx3['waitPeriod'])
            }, _0x5f1bx9['prototype']['reviewPages'] = function(a, _0x5f1bx5) {
                a = a || this;
                var _0x5f1bx7 = a['targetObject'];
                if (void(0) != _0x5f1bx7) {
                    void(0) !== _0x5f1bx5 && _0x5f1bx1b(_0x5f1bx5);
                    var _0x5f1bx9, _0x5f1bxa, _0x5f1bx8 = !1;
                    for (_0x5f1bx9 = 0; _0x5f1bx9 < a['targetObject']['children']['length']; _0x5f1bx9++) {
                        if (_0x5f1bxa = _0x5f1bx7['children'][_0x5f1bx9], 1 == _0x5f1bxa['isFlipping']) {
                            _0x5f1bx8 = !0;
                            break
                        }
                    };
                    if (0 == _0x5f1bx8) {
                        var _0x5f1bxb = _0x5f1bx7['children']['length'],
                            _0x5f1bxd = _0x5f1bx1e(_0x5f1bx7._activePage);
                        for (a['zoomScale'] > 1 && (_0x5f1bxb = 1), _0x5f1bx9 = 0; _0x5f1bx9 < _0x5f1bxb; _0x5f1bx9++) {
                            var _0x5f1bx14 = Math['floor'](_0x5f1bx9 / 2),
                                _0x5f1bxe = _0x5f1bx9 % 2 == 0 ? 2 * -_0x5f1bx14 : 2 * (0 == _0x5f1bx14 ? 1 : _0x5f1bx14),
                                _0x5f1bx6 = _0x5f1bxd + _0x5f1bxe,
                                _0x5f1bxf = _0x5f1bxd + _0x5f1bxe + 1,
                                _0x5f1bx10 = _0x5f1bx7['getPageByNumber'](_0x5f1bx6),
                                _0x5f1bx11 = _0x5f1bx7['getPageByNumber'](_0x5f1bxf),
                                _0x5f1bx12 = 0;
                            if (void(0) !== _0x5f1bx10 && 1 != _0x5f1bx10['frontTextureLoaded'] && (_0x5f1bx7['processPage'](_0x5f1bx6, function() {
                                    a['review']('Batch Call')
                                }), _0x5f1bx10['frontTextureLoaded'] = !0, _0x5f1bx12++), void(0) !== _0x5f1bx11 && 1 != _0x5f1bx11['backTextureLoaded'] && (_0x5f1bx7['processPage'](_0x5f1bxf, function() {
                                    a['review']('Batch Call')
                                }), _0x5f1bx11['backTextureLoaded'] = !0, _0x5f1bx12++), 0 == _0x5f1bxe && a['annotedPage'] !== _0x5f1bxd && 'css' !== _0x5f1bx7['mode'] && (a['getAnnotations'](_0x5f1bx6), a['getAnnotations'](_0x5f1bxf), a['annotedPage'] = _0x5f1bxd), _0x5f1bx12 > 0) {
                                break
                            }
                        };
                        0 == _0x5f1bx12 && (a['setLoading'](_0x5f1bxd), a['setLoading'](_0x5f1bxd + 1))
                    } else {
                        if (a['review']('Revisit request'), void(0) !== a['annotedPage'] && 'css' !== _0x5f1bx7['mode']) {
                            var _0x5f1bx13 = _0x5f1bx1e(_0x5f1bx7._activePage);
                            _0x5f1bx3(_0x5f1bx7['getContentLayer'](_0x5f1bx13))['html'](''), _0x5f1bx3(_0x5f1bx7['getContentLayer'](_0x5f1bx13 + 1))['html'](''), a['annotedPage'] = void(0)
                        }
                    }
                }
            }, _0x5f1bx9['prototype']['getPage'] = function(_0x5f1bx3, _0x5f1bx7, _0x5f1bx8) {
                function _0x5f1bxd(_0x5f1bx3, _0x5f1bx7, _0x5f1bx8) {
                    var _0x5f1bx9 = new Image;
                    _0x5f1bx9['crossOrigin'] = 'Anonymous', _0x5f1bx9['onload'] = function() {
                        if (1 == _0x5f1bx8) {
                            var _0x5f1bxa = document['createElement']('canvas'),
                                _0x5f1bxb = _0x5f1bxa['getContext']('2d');
                            _0x5f1bxa['width'] = _0x5f1bx9['width'], _0x5f1bxa['height'] = _0x5f1bx9['height'], _0x5f1bxb['drawImage'](_0x5f1bx9, 0, 0), 1 == _0x5f1bx5['canvasToBlob'] ? _0x5f1bxa['toBlob'](function(_0x5f1bx3) {
                                var _0x5f1bx5 = a['createObjectURL'](_0x5f1bx3, 'image/jpeg');
                                void(0) != _0x5f1bx7 && _0x5f1bx7(_0x5f1bx5)
                            }, 'image/jpeg', 0.85) : void(0) != _0x5f1bx7 && _0x5f1bx7(_0x5f1bxa)
                        } else {
                            void(0) != _0x5f1bx7 && _0x5f1bx7(_0x5f1bx3)
                        };
                        _0x5f1bx9['onload'] = null, _0x5f1bx9 = null
                    }, _0x5f1bx9['src'] = _0x5f1bx3, (_0x5f1bx9['complete'] || void(0) === _0x5f1bx9['complete']) && (_0x5f1bx9['src'] = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', _0x5f1bx9['src'] = _0x5f1bx3)
                }

                function _0x5f1bx14(_0x5f1bx3, _0x5f1bx5, _0x5f1bx7, _0x5f1bx8) {
                    _0x5f1bx1b('rendering' + _0x5f1bx5);
                    var _0x5f1bxb, _0x5f1bxa = _0x5f1bx9['cacheScale'],
                        _0x5f1bxc = document['createElement']('canvas'),
                        _0x5f1bxd = performance['now'](),
                        _0x5f1bx14 = _0x5f1bx9['cacheIndex'],
                        _0x5f1bxe = _0x5f1bxc['getContext']('2d');
                    1 == _0x5f1bx8 && (_0x5f1bxa = _0x5f1bx9['thumbsize'] / _0x5f1bx9['normalViewport']['height']), _0x5f1bxc['height'] = _0x5f1bx9['normalViewport']['height'] * _0x5f1bxa, _0x5f1bxc['width'] = _0x5f1bx9['normalViewport']['width'] * _0x5f1bxa, _0x5f1bxb = _0x5f1bx3['getViewport'](_0x5f1bxa), _0x5f1bx9['options']['pageSize'] == a['PAGE_SIZE']['DOUBLEINTERNAL'] && _0x5f1bx5 > 2 && _0x5f1bx5 % 2 == 1 && (_0x5f1bxb['transform'][4] = -_0x5f1bxc['width']);
                    var _0x5f1bx6 = {
                        canvasContext: _0x5f1bxe,
                        viewport: _0x5f1bxb
                    };
                    _0x5f1bx3['cleanupAfterRender'] = !0;
                    var _0x5f1bxf = _0x5f1bx3['render'](_0x5f1bx6);
                    _0x5f1bxf['promise']['then'](function() {
                        _0x5f1bx1b(performance['now']() - _0x5f1bxd), _0x5f1bxd = performance['now'](), 1 == _0x5f1bx8 || 1 == _0x5f1bx9['options']['canvasToBlob'] && _0x5f1bx9['webgl'] !== !0 ? _0x5f1bxc['toBlob'](function(_0x5f1bx3) {
                            var _0x5f1bxa = a['createObjectURL'](_0x5f1bx3, 'image/jpeg');
                            _0x5f1bx1b(performance['now']() - _0x5f1bxd), _0x5f1bx9['setCache'](_0x5f1bx5, _0x5f1bxa, _0x5f1bx8, _0x5f1bx14), _0x5f1bx9['setPage'](_0x5f1bx5, _0x5f1bxa, _0x5f1bx7, _0x5f1bx8)
                        }, 'image/jpeg', 0.85) : _0x5f1bx9['setPage'](_0x5f1bx5, _0x5f1bxc, _0x5f1bx7, _0x5f1bx8), _0x5f1bx6 = null
                    })
                }
                var _0x5f1bx9 = this;
                _0x5f1bx3 = parseInt(_0x5f1bx3, 10);
                var _0x5f1bxa = _0x5f1bx9['contentSource'];
                if (_0x5f1bx3 <= 0 && _0x5f1bx3 >= _0x5f1bx9['pageCount']) {
                    _0x5f1bx9['setPage'](_0x5f1bx3, _0x5f1bx5['textureLoadFallback'], _0x5f1bx7, _0x5f1bx8)
                } else {
                    if (_0x5f1bx9['contentSourceType'] == _0x5f1bxb['PDF']) {
                        if (void(0) !== _0x5f1bx9['getCache'](_0x5f1bx3, _0x5f1bx8)) {
                            _0x5f1bx9['setPage'](_0x5f1bx3, _0x5f1bx9['getCache'](_0x5f1bx3, _0x5f1bx8), _0x5f1bx7, _0x5f1bx8), _0x5f1bx1b('Page ' + _0x5f1bx3 + ' loaded from cache')
                        } else {
                            _0x5f1bx8 !== !0 && _0x5f1bx9['setLoading'](_0x5f1bx3, !0);
                            var _0x5f1bxc = _0x5f1bx3;
                            _0x5f1bx9['options']['pageSize'] == a['PAGE_SIZE']['DOUBLEINTERNAL'] && _0x5f1bx3 > 2 && (_0x5f1bxc = Math['ceil']((_0x5f1bx3 - 1) / 2) + 1), _0x5f1bxa['getPage'](_0x5f1bxc, _0x5f1bx8)['then'](function(a) {
                                _0x5f1bx14(a, _0x5f1bx3, _0x5f1bx7, _0x5f1bx8)
                            })
                        }
                    } else {
                        _0x5f1bx9['contentSourceType'] != _0x5f1bxb['IMAGE'] && _0x5f1bx9['contentSourceType'] != _0x5f1bxb['HTML'] || (void(0) !== _0x5f1bx9['getCache'](_0x5f1bx3, _0x5f1bx8) ? (_0x5f1bx9['setPage'](_0x5f1bx3, _0x5f1bx9['getCache'](_0x5f1bx3, _0x5f1bx8), _0x5f1bx7, _0x5f1bx8), _0x5f1bx1b('Page ' + _0x5f1bx3 + ' loaded from cache')) : (_0x5f1bx8 !== !0 && _0x5f1bx9['setLoading'](_0x5f1bx3, !0), _0x5f1bxd(_0x5f1bxa[_0x5f1bx3 - 1], function(a) {
                            _0x5f1bx9['setCache'](_0x5f1bx3, a, _0x5f1bx8, _0x5f1bx9['cacheIndex']), _0x5f1bx9['setPage'](_0x5f1bx3, a, _0x5f1bx7, _0x5f1bx8), void(0) != _0x5f1bx7 && _0x5f1bx7()
                        }, _0x5f1bx9['isCrossOrigin'])))
                    }
                }
            }, _0x5f1bx9['prototype']['getTargetPage'] = function(a) {}, _0x5f1bx9['prototype']['setLoading'] = function(a, _0x5f1bx5) {
                if (void(0) !== this['targetObject']) {
                    if (1 == this['webgl']) {
                        var _0x5f1bx7 = this['targetObject']['container'];
                        1 == _0x5f1bx5 ? _0x5f1bx7['addClass']('PDFFlip-loading') : _0x5f1bx7['removeClass']('PDFFlip-loading')
                    } else {
                        var _0x5f1bx8 = _0x5f1bx3(this['targetObject']['getContentLayer'](a));
                        void(0) !== _0x5f1bx8 && (1 == _0x5f1bx5 ? _0x5f1bx8['addClass']('PDFFlip-page-loading') : _0x5f1bx8['removeClass']('PDFFlip-page-loading'))
                    }
                }
            }, _0x5f1bx9['prototype']['getAnnotations'] = function(_0x5f1bx5) {
                var _0x5f1bx7 = this,
                    _0x5f1bx8 = _0x5f1bx7['targetObject'];
                _0x5f1bx5 = parseInt(_0x5f1bx5, 10);
                var _0x5f1bx9 = _0x5f1bx7['contentSource'],
                    _0x5f1bxa = _0x5f1bx3(_0x5f1bx8['getContentLayer'](_0x5f1bx5));
                if (_0x5f1bxa['empty'](), _0x5f1bx5 > 0 && _0x5f1bx5 <= _0x5f1bx7['pageCount']) {
                    if (_0x5f1bx7['contentSourceType'] == _0x5f1bxb['PDF']) {
                        var _0x5f1bxd = (_0x5f1bx1e(_0x5f1bx5), _0x5f1bx5);
                        _0x5f1bx7['options']['pageSize'] == a['PAGE_SIZE']['DOUBLEINTERNAL'] && _0x5f1bx5 > 2 && (_0x5f1bxd = Math['ceil']((_0x5f1bx5 - 1) / 2) + 1), _0x5f1bx9['getPage'](_0x5f1bxd)['then'](function(a) {
                            void(0) !== _0x5f1bxa && _0x5f1bxa['length'] > 0 && _0x5f1bx7['setupAnnotations'](a, _0x5f1bx7['viewport'], _0x5f1bxa, _0x5f1bx5)
                        })
                    };
                    if (void(0) !== _0x5f1bx7['links'] && void(0) !== _0x5f1bx7['links'][_0x5f1bx5]) {
                        for (var _0x5f1bx14 = _0x5f1bx7['links'][_0x5f1bx5], _0x5f1bxe = 0; _0x5f1bxe < _0x5f1bx14['length']; _0x5f1bxe++) {
                            var _0x5f1bx6 = _0x5f1bx14[_0x5f1bxe],
                                _0x5f1bxf = document['createElement']('a');
                            _0x5f1bxf['setAttribute']('dest', _0x5f1bx6['dest']), _0x5f1bxf['className'] = 'customLinkAnnotation', _0x5f1bxf['href'] = '#' + _0x5f1bx6['dest'], _0x5f1bxf['onclick'] = function() {
                                var a = this['getAttribute']('dest');
                                return a && _0x5f1bx7['linkService']['customNavigateTo'](a), !1
                            }, _0x5f1bxf['style']['left'] = _0x5f1bx6['x'] + '%', _0x5f1bxf['style']['top'] = _0x5f1bx6['y'] + '%', _0x5f1bxf['style']['width'] = _0x5f1bx6['w'] + '%', _0x5f1bxf['style']['height'] = _0x5f1bx6['h'] + '%', _0x5f1bxa[0]['appendChild'](_0x5f1bxf)
                        }
                    };
                    if (void(0) !== _0x5f1bx7['html'] && void(0) !== _0x5f1bx7['html'][_0x5f1bx5]) {
                        var _0x5f1bx10 = _0x5f1bx7['html'][_0x5f1bx5];
                        _0x5f1bxa['append'](_0x5f1bx3('<div class=\'customHTMLAnnotation\'>')['html'](_0x5f1bx10))
                    }
                }
            }, _0x5f1bx9['prototype']['setPage'] = function(_0x5f1bx3, _0x5f1bx7, _0x5f1bx8, _0x5f1bx9) {
                var _0x5f1bxa = this,
                    _0x5f1bxb = _0x5f1bxa['targetObject'];
                if (1 == _0x5f1bx9) {
                    var _0x5f1bxc = _0x5f1bxa['targetObject']['container']['find']('#PDFFlip-thumb' + _0x5f1bx3);
                    _0x5f1bxc['css']({
                        backgroundImage: _0x5f1bx17(_0x5f1bx7)
                    })
                } else {
                    _0x5f1bx7 == _0x5f1bx5['textureLoadFallback'] ? _0x5f1bx1b('Fallback on ' + _0x5f1bx3) : 'css' == _0x5f1bxb['mode'] && _0x5f1bxa['getAnnotations'](_0x5f1bx3);
                    var _0x5f1bxd = _0x5f1bxb['getPageByNumber'](_0x5f1bx3);
                    void(0) !== _0x5f1bxd ? _0x5f1bx3 % 2 != 0 && _0x5f1bxb['Flip_Direction'] == a['Flip_Direction']['LTR'] || _0x5f1bx3 % 2 != 1 && _0x5f1bxb['Flip_Direction'] == a['Flip_Direction']['RTL'] ? (_0x5f1bx1b(_0x5f1bx3 + 'rendered to back of ' + _0x5f1bxd['color']), _0x5f1bxd['backImage'](_0x5f1bx7, function() {
                        _0x5f1bxa['setLoading'](_0x5f1bx3), void(0) != _0x5f1bx8 && _0x5f1bx8()
                    })) : (_0x5f1bx1b(_0x5f1bx3 + 'rendered to front of ' + _0x5f1bxd['color']), _0x5f1bxd['frontImage'](_0x5f1bx7, function() {
                        _0x5f1bxa['setLoading'](_0x5f1bx3), void(0) != _0x5f1bx8 && _0x5f1bx8()
                    })) : _0x5f1bx1b('Invalid set request on Page ' + _0x5f1bx3)
                }
            }, _0x5f1bx9['prototype']['setupAnnotations'] = function(_0x5f1bx5, _0x5f1bx7, _0x5f1bx8, _0x5f1bx9) {
                if (void(0) != _0x5f1bx8 && 0 != _0x5f1bx3(_0x5f1bx8)['length']) {
                    var _0x5f1bxa = this;
                    return _0x5f1bx5['getAnnotations']()['then'](function(_0x5f1bxb) {
                        if (_0x5f1bx7 = _0x5f1bx7['clone']({
                                dontFlip: !0
                            }), _0x5f1bxa['options']['pageSize'] == a['PAGE_SIZE']['DOUBLEINTERNAL'] && _0x5f1bx9 > 2 && _0x5f1bx9 % 2 == 1, void(0) != _0x5f1bx8) {
                            _0x5f1bx8 = _0x5f1bx3(_0x5f1bx8), 0 == _0x5f1bx8['find']('.annotationDiv')['length'] && _0x5f1bx8['append'](_0x5f1bx3('<div class=\'annotationDiv\'>'));
                            var _0x5f1bxc = _0x5f1bx8['find']('.annotationDiv');
                            _0x5f1bxc['empty'](), _0x5f1bxa['options']['pageSize'] == a['PAGE_SIZE']['DOUBLEINTERNAL'] && _0x5f1bx9 > 2 && _0x5f1bx9 % 2 == 1 ? _0x5f1bxc['css']({
                                left: '-100%'
                            }) : 1 == _0x5f1bx9 && _0x5f1bxc['css']({
                                left: ''
                            }), PDFJS['AnnotationLayer']['render']({
                                annotations: _0x5f1bxb,
                                div: _0x5f1bxc[0],
                                page: _0x5f1bx5,
                                viewport: _0x5f1bx7,
                                linkService: _0x5f1bxa['linkService']
                            }), _0x5f1bxc['find'](' > section')['addClass']('someclass')
                        }
                    })
                }
            }, _0x5f1bx9
        }({}),
        _0x5f1bx2d = function() {
            function _0x5f1bx5(a) {
                this['angles'] = a['angles'] || [0, 0, 0, 0, 0, 0], this['stiffness'] = a['angles'] || 0.1, this['segments'] = a['segments'] || 1, this['initDOM']()
            }

            function _0x5f1bx7(a) {
                var _0x5f1bx5 = a['contentLayer'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: 'PDFFlip-single-inpage'
                });
                a['append'](_0x5f1bx5)
            }
            return _0x5f1bx5['prototype'] = {
                initDOM: function() {
                    var a = this['element'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-book-page'
                        }),
                        _0x5f1bx5 = this['wrapper'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-page-wrapper'
                        }),
                        _0x5f1bx8 = this['front'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-page-front'
                        }),
                        _0x5f1bx9 = this['back'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-page-back'
                        }),
                        _0x5f1bxa = this['foldInnerShadow'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-page-fold-inner-shadow'
                        }),
                        _0x5f1bxb = this['foldOuterShadow'] = _0x5f1bx3(_0x5f1bxe['div'], {
                            class: 'PDFFlip-page-fold-outer-shadow'
                        });
                    _0x5f1bx7(_0x5f1bx8, this['segments'], !0), _0x5f1bx7(_0x5f1bx9, this['segments'], !1), a['append'](_0x5f1bx5)['append'](_0x5f1bxb), _0x5f1bx5['append'](_0x5f1bx8)['append'](_0x5f1bx9)['append'](_0x5f1bxa)
                },
                updatePoint: function(_0x5f1bx3) {
                    if (void(0) != _0x5f1bx3) {
                        var _0x5f1bx5 = void(0) != this['parent']['dragPage'] ? this['parent']['dragPage'] : void(0) != _0x5f1bx3['page'] ? _0x5f1bx3['page'] : this,
                            _0x5f1bx7 = _0x5f1bx5['element']['width'](),
                            _0x5f1bx8 = _0x5f1bx5['element']['height'](),
                            _0x5f1bx9 = void(0) !== this['parent']['corner'] ? this['parent']['corner'] : _0x5f1bx3['corner'],
                            _0x5f1bxa = a['CORNERS'],
                            _0x5f1bxb = _0x5f1bx5['side'] == _0x5f1bxd['right'],
                            _0x5f1bxc = _0x5f1bx9 == _0x5f1bxa['BL'] || _0x5f1bx9 == _0x5f1bxa['BR'];
                        _0x5f1bx3['rx'] = 1 == _0x5f1bxb ? 2 * _0x5f1bx7 - _0x5f1bx3['x'] : _0x5f1bx3['x'], _0x5f1bx3['ry'] = 1 == _0x5f1bxc ? _0x5f1bx8 - _0x5f1bx3['y'] : _0x5f1bx3['y'];
                        var _0x5f1bx14 = Math['atan2'](_0x5f1bx3['ry'], _0x5f1bx3['rx']);
                        _0x5f1bx14 = Math['PI'] / 2 - _0x5f1bx18(_0x5f1bx14, 0, _0x5f1bx6(90));
                        var _0x5f1bxe = _0x5f1bxb ? _0x5f1bx3['x'] / 2 : _0x5f1bx7 - _0x5f1bx3['x'] / 2,
                            _0x5f1bx10 = _0x5f1bx3['ry'] / 2,
                            _0x5f1bx12 = Math['max'](0, Math['sin'](_0x5f1bx14 - Math['atan2'](_0x5f1bx10, _0x5f1bxe)) * _0x5f1bx16(_0x5f1bxe, _0x5f1bx10)),
                            _0x5f1bx15 = 0.5 * _0x5f1bx16(_0x5f1bx3['rx'], _0x5f1bx3['ry']),
                            _0x5f1bx17 = Math['round'](_0x5f1bx7 - _0x5f1bx12 * Math['sin'](_0x5f1bx14)),
                            _0x5f1bx2b = Math['round'](_0x5f1bx12 * Math['cos'](_0x5f1bx14)),
                            _0x5f1bx19 = _0x5f1bxf(_0x5f1bx14),
                            _0x5f1bx1a = _0x5f1bxc ? _0x5f1bxb ? 180 + (90 - _0x5f1bx19) : 180 + _0x5f1bx19 : _0x5f1bxb ? _0x5f1bx19 : 90 - _0x5f1bx19,
                            _0x5f1bx1b = _0x5f1bxc ? _0x5f1bxb ? 180 + (90 - _0x5f1bx19) : _0x5f1bx19 : _0x5f1bxb ? _0x5f1bx19 + 180 : _0x5f1bx1a,
                            _0x5f1bx1c = _0x5f1bxc ? _0x5f1bxb ? 90 - _0x5f1bx19 : _0x5f1bx19 + 90 : _0x5f1bxb ? _0x5f1bx1a - 90 : _0x5f1bx1a + 180,
                            _0x5f1bx1d = _0x5f1bxb ? _0x5f1bx7 - _0x5f1bx17 : _0x5f1bx17,
                            _0x5f1bx1e = _0x5f1bxc ? _0x5f1bx8 + _0x5f1bx2b : -_0x5f1bx2b,
                            _0x5f1bx1f = _0x5f1bxb ? -_0x5f1bx17 : _0x5f1bx17 - _0x5f1bx7,
                            _0x5f1bx20 = _0x5f1bxc ? -_0x5f1bx8 - _0x5f1bx2b : _0x5f1bx2b,
                            _0x5f1bx22 = _0x5f1bx18(0.5 * _0x5f1bx3['distance'] / _0x5f1bx7, 0, 0.5),
                            _0x5f1bx23 = _0x5f1bx18(0.5 * (2 * _0x5f1bx7 - _0x5f1bx3['rx']) / _0x5f1bx7, 0.05, 0.3);
                        _0x5f1bx5['element']['addClass']('PDFFlip-folding');
                        var _0x5f1bx24 = _0x5f1bxb ? _0x5f1bx5['back'] : _0x5f1bx5['front'],
                            _0x5f1bx25 = _0x5f1bxb ? _0x5f1bx5['front'] : _0x5f1bx5['back'],
                            _0x5f1bx26 = _0x5f1bx5['foldOuterShadow'],
                            _0x5f1bx27 = _0x5f1bx5['foldInnerShadow'];
                        _0x5f1bx5['wrapper']['css']({
                            transform: _0x5f1bx11(_0x5f1bx1d, _0x5f1bx1e) + _0x5f1bx13(_0x5f1bx1a)
                        }), _0x5f1bx24['css']({
                            transform: _0x5f1bx13(-_0x5f1bx1a) + _0x5f1bx11(-_0x5f1bx1d, -_0x5f1bx1e)
                        }), _0x5f1bx25['css']({
                            transform: _0x5f1bx13(_0x5f1bx1b) + _0x5f1bx11(_0x5f1bx1f, _0x5f1bx20),
                            boxShadow: 'rgba(0, 0, 0, ' + _0x5f1bx22 + ') 0px 0px 20px'
                        }), _0x5f1bx27['css']({
                            transform: _0x5f1bx13(_0x5f1bx1b) + _0x5f1bx11(_0x5f1bx1f, _0x5f1bx20),
                            opacity: _0x5f1bx23 / 2,
                            backgroundImage: _0x5f1bx21['css'] + 'linear-gradient( ' + _0x5f1bx1c + 'deg, rgba(0, 0, 0, 0.25) , rgb(0, 0, 0) ' + 0.7 * _0x5f1bx15 + 'px, rgb(255, 255, 255) ' + _0x5f1bx15 + 'px)'
                        }), _0x5f1bx26['css']({
                            opacity: _0x5f1bx23 / 2,
                            left: _0x5f1bxb ? 'auto' : 0,
                            right: _0x5f1bxb ? 0 : 'auto',
                            backgroundImage: _0x5f1bx21['css'] + 'linear-gradient( ' + (-_0x5f1bx1c + 180) + 'deg, rgba(0, 0, 0,0) ' + _0x5f1bx15 / 3 + 'px, rgb(0, 0, 0) ' + _0x5f1bx15 + 'px)'
                        })
                    }
                },
                updateAngle: function(a, _0x5f1bx3) {
                    var _0x5f1bx5 = 5 * this['element']['width']();
                    this['wrapper']['css']({
                        perspective: _0x5f1bx5,
                        perspectiveOrigin: 1 == _0x5f1bx3 ? '0% 50%' : '100% 50%'
                    }), this['front']['css']({
                        display: 1 == _0x5f1bx3 ? a <= -90 ? 'block' : 'none' : a < 90 ? 'block' : 'none',
                        transform: ('MfS' !== _0x5f1bx21['dom'] ? '' : 'perspective(' + _0x5f1bx5 + 'px) ') + (1 == _0x5f1bx3 ? 'translateX(-100%) ' : '') + 'rotateY(' + ((1 == _0x5f1bx3 ? 180 : 0) + a) + 'deg)'
                    }), this['back']['css']({
                        display: 1 == _0x5f1bx3 ? a > -90 ? 'block' : 'none' : a >= 90 ? 'block' : 'none',
                        transform: ('MSd' !== _0x5f1bx21['dom'] ? '' : 'perspective(' + _0x5f1bx5 + 'px) ') + (0 == _0x5f1bx3 ? 'translateX(100%) ' : '') + 'rotateY(' + ((0 == _0x5f1bx3 ? -180 : 0) + a) + 'deg)'
                    })
                },
                tween: function(_0x5f1bx3) {
                    var _0x5f1bx5 = this;
                    if (void(0) != _0x5f1bx5 && void(0) != _0x5f1bx5['parent']) {
                        var _0x5f1bxa, _0x5f1bxb, _0x5f1bxc, _0x5f1bx7 = _0x5f1bx5['side'] == _0x5f1bxd['right'],
                            _0x5f1bx8 = _0x5f1bx5['parent']['corner'] == a['CORNERS']['BL'] || _0x5f1bx5['parent']['corner'] == a['CORNERS']['BR'],
                            _0x5f1bx9 = _0x5f1bx8 ? _0x5f1bx5['parent']['height'] : 0,
                            _0x5f1bx14 = 0,
                            _0x5f1bxe = _0x5f1bx5['end'] = _0x5f1bx5 && 1 == _0x5f1bx5['animateToReset'] ? {
                                x: _0x5f1bx7 ? _0x5f1bx5['parent']['fullWidth'] : 0,
                                y: _0x5f1bx9
                            } : {
                                x: _0x5f1bx7 ? 0 : _0x5f1bx5['parent']['fullWidth'],
                                y: _0x5f1bx9
                            };
                        _0x5f1bx5['ease'] = _0x5f1bx5['isHard'] ? TWEEN['Easing']['Quadratic']['InOut'] : TWEEN['Easing']['Linear']['None'];
                        var _0x5f1bx6 = _0x5f1bx5['parent']['duration'];
                        1 == _0x5f1bx5['isHard'] ? (void(0) != _0x5f1bx3 && (_0x5f1bx14 = _0x5f1bx1a(_0x5f1bx3['distance'], _0x5f1bx3['fullWidth'])), _0x5f1bxa = _0x5f1bx5['init'] = {
                            angle: _0x5f1bx14 * (_0x5f1bx7 ? -1 : 1)
                        }, _0x5f1bxe = _0x5f1bx5['end'] = _0x5f1bx5 && 1 == _0x5f1bx5['animateToReset'] ? {
                            angle: _0x5f1bx7 ? 0 : -0
                        } : {
                            angle: _0x5f1bx7 ? -180 : 180
                        }) : void(0) == _0x5f1bx3 ? (_0x5f1bxa = _0x5f1bx5['init'] = _0x5f1bx5 && 1 == _0x5f1bx5['animateToReset'] ? {
                            x: _0x5f1bx7 ? 0 : _0x5f1bx5['parent']['fullWidth'],
                            y: 0
                        } : {
                            x: _0x5f1bx7 ? _0x5f1bx5['parent']['fullWidth'] : 0,
                            y: 0
                        }, _0x5f1bxb = _0x5f1bx5['first'] = {
                            x: (_0x5f1bx7 ? 3 : 1) * _0x5f1bx5['parent']['fullWidth'] / 4,
                            y: 0
                        }, _0x5f1bxc = _0x5f1bx5['mid'] = {
                            x: (_0x5f1bx7 ? 1 : 3) * _0x5f1bx5['parent']['fullWidth'] / 4,
                            y: 0
                        }) : (_0x5f1bxa = _0x5f1bx5['init'] = {
                            x: _0x5f1bx3['x'],
                            y: _0x5f1bx3['y']
                        }, _0x5f1bxb = _0x5f1bx5['first'] = {
                            x: 3 * _0x5f1bx3['x'] / 4,
                            y: 3 * _0x5f1bx3['y'] / 4
                        }, _0x5f1bxc = _0x5f1bx5['mid'] = {
                            x: _0x5f1bx3['x'] / 4,
                            y: _0x5f1bx3['y'] / 4
                        }, _0x5f1bx6 = _0x5f1bx5['parent']['duration'] * _0x5f1bx19(_0x5f1bxa['x'], _0x5f1bxa['y'], _0x5f1bxe['x'], _0x5f1bxe['y']) / _0x5f1bx5['parent']['fullWidth'], _0x5f1bx6 = _0x5f1bx18(_0x5f1bx6, _0x5f1bx5['parent']['duration'] / 3, _0x5f1bx5['parent']['duration'])), _0x5f1bx5['isFlipping'] = !0;
                        var _0x5f1bxf = function(a) {
                            1 == _0x5f1bx5['isHard'] ? _0x5f1bx5['updateAngle'](a['angle'], _0x5f1bx7) : _0x5f1bx5['updatePoint']({
                                x: a['x'],
                                y: a['y']
                            })
                        };
                        _0x5f1bx5['completeTween'] = _0x5f1bx5['completeTween'] || function(_0x5f1bx3) {
                            _0x5f1bx5['isFlipping'] = !1, 1 == _0x5f1bx5['isHard'] ? (_0x5f1bx5['updateAngle'](_0x5f1bx5['end']['angle']), _0x5f1bx5['back']['css']({
                                display: 'block'
                            }), _0x5f1bx5['front']['css']({
                                display: 'block'
                            })) : _0x5f1bx5['updatePoint']({
                                x: _0x5f1bx5['end']['x'],
                                y: _0x5f1bx5['end']['y']
                            }), _0x5f1bx5['animateToReset'] !== !0 ? _0x5f1bx5['side'] = _0x5f1bx5['side'] == _0x5f1bxd['right'] ? _0x5f1bxd['left'] : _0x5f1bxd['right'] : _0x5f1bx5['animateToReset'] = void(0), _0x5f1bx5['currentTween'] = void(0), _0x5f1bx5['pendingPoint'] = void(0), _0x5f1bx5['magnetic'] = !1, _0x5f1bx5['parent']['dragPage'] = void(0), _0x5f1bx5['parent']['corner'] = a['CORNERS']['NONE'], 1 != _0x5f1bx3 && _0x5f1bx5['parent']['refresh']()
                        };
                        1 == _0x5f1bx5['isHard'] ? _0x5f1bx5['currentTween'] = new TWEEN.Tween(_0x5f1bxa)['delay'](0)['to'](_0x5f1bxe, _0x5f1bx5['parent']['duration'])['onUpdate'](function() {
                            _0x5f1bxf(this)
                        })['easing'](_0x5f1bx5['ease'])['onComplete'](_0x5f1bx5['completeTween'])['start']() : void(0) == _0x5f1bx3 ? _0x5f1bx5['currentTween'] = new TWEEN.Tween(_0x5f1bxa)['delay'](0)['to'](_0x5f1bxe, _0x5f1bx5['parent']['duration'])['onUpdate'](function() {
                            _0x5f1bxf(this)
                        })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](_0x5f1bx5['completeTween'])['start']() : (_0x5f1bx5['currentTween'] = new TWEEN.Tween(_0x5f1bxa)['delay'](0)['to'](_0x5f1bxe, _0x5f1bx6)['onUpdate'](function() {
                            _0x5f1bxf(this)
                        })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](_0x5f1bx5['completeTween']), _0x5f1bx5['currentTween']['start']())
                    }
                },
                frontImage: function(a, _0x5f1bx5) {
                    'CANVAS' == a['nodeName'] ? (this['front']['find']('>canvas')['remove'](), this['front']['append'](_0x5f1bx3(a))) : this['front']['css']({
                        backgroundImage: _0x5f1bx17(a)
                    }), void(0) !== _0x5f1bx5 && _0x5f1bx5()
                },
                backImage: function(a, _0x5f1bx5) {
                    'CANVAS' == a['nodeName'] ? (this['back']['find']('>canvas')['remove'](), this['back']['append'](_0x5f1bx3(a))) : this['back']['css']({
                        backgroundImage: _0x5f1bx17(a)
                    }), void(0) !== _0x5f1bx5 && _0x5f1bx5()
                },
                updateCSS: function(a) {
                    this['element']['css'](a)
                },
                resetCSS: function() {
                    this['wrapper']['css']({
                        transform: ''
                    }), this['front']['css']({
                        transform: '',
                        boxShadow: ''
                    }), this['back']['css']({
                        transform: '',
                        boxShadow: ''
                    })
                },
                clearTween: function(a) {
                    this['currentTween']['stop'](), this['completeTween'](1 == a), this['resetCSS']()
                }
            }, _0x5f1bx5
        }(),
        _0x5f1bx2e = function(_0x5f1bx5) {
            function _0x5f1bx8(a) {
                a['parent']['container']['find']('.PDFFlip-folding')['removeClass']('PDFFlip-folding'), a['element']['addClass']('PDFFlip-folding')
            }

            function _0x5f1bx9(a) {
                for (var _0x5f1bx3 = !1, _0x5f1bx5 = 0; _0x5f1bx5 < a['pages']['length']; _0x5f1bx5++) {
                    var _0x5f1bx7 = a['pages'][_0x5f1bx5];
                    if (1 == _0x5f1bx7['isFlipping']) {
                        _0x5f1bx3 = !0;
                        break
                    }
                };
                return _0x5f1bx3
            }

            function _0x5f1bxa(_0x5f1bx5, _0x5f1bxa) {
                function _0x5f1bxc(a) {
                    _0x5f1bxb['dragPage'] != a['page'] && 1 == a['page']['visible'] && (_0x5f1bxb['dragPage']['clearTween'](!0), _0x5f1bxb['dragPage'] = a['page'], _0x5f1bxb['corner'] = a['corner'], _0x5f1bxb['dragPage']['pendingPoint'] = a)
                }
                var _0x5f1bxb = this;
                _0x5f1bxb['type'] = 'BookCSS', _0x5f1bxb['images'] = _0x5f1bx5['images'] || [], _0x5f1bxb['pageCount'] = _0x5f1bx5['pageCount'] || 2, _0x5f1bxb['foldSense'] = 50, _0x5f1bxb['stackCount'] = 4, _0x5f1bxb['mode'] = 'css', _0x5f1bxb['pages'] = [], _0x5f1bxb['duration'] = _0x5f1bx5['duration'], _0x5f1bxb['container'] = _0x5f1bx3(_0x5f1bxa), _0x5f1bxb['options'] = _0x5f1bx5, _0x5f1bxb['drag'] = _0x5f1bxd['none'], _0x5f1bxb['pageCount'] = 1 == _0x5f1bxb['pageCount'] ? _0x5f1bxb['pageCount'] : 2 * Math['ceil'](_0x5f1bxb['pageCount'] / 2), _0x5f1bxb['pageMode'] = _0x5f1bx5['pageMode'] || (_0x5f1bx22 || _0x5f1bxb['pageCount'] <= 2 ? a['PAGE_MODE']['SINGLE'] : a['PAGE_MODE']['DOUBLE']), _0x5f1bxb['swipe_threshold'] = _0x5f1bx22 ? 15 : 50, _0x5f1bxb['Flip_Direction'] = _0x5f1bx5['Flip_Direction'] || a['Flip_Direction']['LTR'], _0x5f1bxb['startPage'] = 1, _0x5f1bxb['endPage'] = _0x5f1bxb['pageCount'], _0x5f1bxb['_activePage'] = _0x5f1bx5['openPage'] || _0x5f1bxb['startPage'], _0x5f1bxb['hardConfig'] = _0x5f1bx5['hard'], _0x5f1bx7 = 'WebKitCSSMatrix' in window || document['body'] && 'MozPerspective' in document['body']['style'], _0x5f1bxb['animateF'] = function() {
                    TWEEN['getAll']()['length'] > 0 ? TWEEN['update']() : clearInterval(_0x5f1bxb['animate'])
                }, _0x5f1bxb['init'](_0x5f1bx5), _0x5f1bxb['skipDrag'] = !1;
                var _0x5f1bx14 = function(_0x5f1bx3) {
                        var _0x5f1bx5 = _0x5f1bxb['eventToPoint'](_0x5f1bx3);
                        if (!(void(0) !== _0x5f1bx3['touches'] && _0x5f1bx3['touches']['length'] > 1)) {
                            var _0x5f1bx7 = _0x5f1bxb['dragPage'] || _0x5f1bx5['page'];
                            if (1 !== _0x5f1bxb['contentProvider']['zoomScale']) {
                                void(0) === _0x5f1bx3['touches'] && 1 != _0x5f1bxb['isPanning'] || (_0x5f1bxb['pan'](_0x5f1bx5), _0x5f1bx3['preventDefault']())
                            } else {
                                if (_0x5f1bxb['skipDrag'] !== !0) {
                                    _0x5f1bx5['distance'];
                                    if (!_0x5f1bx9(_0x5f1bxb)) {
                                        if (void(0) !== _0x5f1bxb['dragPage'] || 1 == _0x5f1bx5['isInside']) {
                                            void(0) !== _0x5f1bxb['dragPage'] ? _0x5f1bx1b('set mouse down move') : (_0x5f1bx5['y'] = _0x5f1bx18(_0x5f1bx5['y'], 1, _0x5f1bxb['height'] - 1), _0x5f1bx5['x'] = _0x5f1bx18(_0x5f1bx5['x'], 1, _0x5f1bx5['fullWidth'] - 1));
                                            var _0x5f1bxa = _0x5f1bxb['corner'] || _0x5f1bx5['corner'];
                                            if (_0x5f1bx7['isHard']) {
                                                var _0x5f1bxc = _0x5f1bxa == a['CORNERS']['BR'] || _0x5f1bxa == a['CORNERS']['TR'],
                                                    _0x5f1bx14 = _0x5f1bx1a(_0x5f1bx5['distance'], _0x5f1bx5['fullWidth']);
                                                _0x5f1bx7['updateAngle'](_0x5f1bx14 * (_0x5f1bxc ? -1 : 1), _0x5f1bxc)
                                            } else {
                                                _0x5f1bx7['updatePoint'](_0x5f1bx5, _0x5f1bxb)
                                            };
                                            _0x5f1bx7['magnetic'] = !0, _0x5f1bx7['magneticCorner'] = _0x5f1bx5['corner'], _0x5f1bx3['preventDefault']()
                                        };
                                        if (void(0) == _0x5f1bxb['dragPage'] && void(0) !== _0x5f1bx7 && 0 == _0x5f1bx5['isInside'] && 1 == _0x5f1bx7['magnetic'] && (_0x5f1bx7['pendingPoint'] = _0x5f1bx5, _0x5f1bx7['animateToReset'] = !0, _0x5f1bxb['corner'] = _0x5f1bx7['magneticCorner'], _0x5f1bxb['animatePage'](_0x5f1bx7), _0x5f1bx7['pendingPoint'] = void(0), _0x5f1bx7['magnetic'] = !1, _0x5f1bx7['magneticCorner'] = void(0)), 1 == _0x5f1bxb['isPanning'] && void(0) == _0x5f1bxb['dragPage'] && 1 == _0x5f1bxb['contentProvider']['zoomScale']) {
                                            var _0x5f1bxe = _0x5f1bx5['x'] - _0x5f1bxb['lastPos'];
                                            performance['now']() - _0x5f1bxb['lastTime'];
                                            Math['abs'](_0x5f1bxe) > _0x5f1bxb['swipe_threshold'] && (_0x5f1bxe < 0 ? _0x5f1bxb['next']() : _0x5f1bxb['prev'](), _0x5f1bxb['drag'] = _0x5f1bxd['none'], _0x5f1bxb['isPanning'] = !1, _0x5f1bx3['preventDefault']()), _0x5f1bxb['lastPos'] = _0x5f1bx5['x'], _0x5f1bxb['lastTime'] = performance['now']()
                                        }
                                    }
                                }
                            }
                        }
                    },
                    _0x5f1bxe = function(_0x5f1bx3) {
                        if (_0x5f1bxb['isPanning'] = !1, !(void(0) !== _0x5f1bx3['touches'] && _0x5f1bx3['touches']['length'] > 1) && _0x5f1bxb['skipDrag'] !== !0) {
                            if (_0x5f1bxb['dragPage']) {
                                _0x5f1bx3['preventDefault']();
                                var _0x5f1bx5 = _0x5f1bxb['eventToPoint'](_0x5f1bx3);
                                _0x5f1bxb['dragPage']['pendingPoint'] = _0x5f1bx5, _0x5f1bx5['x'] == _0x5f1bxb['startPoint']['x'] && _0x5f1bx5['y'] == _0x5f1bxb['startPoint']['y'] && 1 == _0x5f1bx5['isInside'] ? _0x5f1bxb['corner'] == a['CORNERS']['BR'] || _0x5f1bxb['corner'] == a['CORNERS']['TR'] ? (_0x5f1bxc(_0x5f1bx5), _0x5f1bxb['dragPage']['isFlipping'] !== !0 && _0x5f1bxb['next']()) : _0x5f1bxb['corner'] != a['CORNERS']['BL'] && _0x5f1bxb['corner'] != a['CORNERS']['TL'] || (_0x5f1bxc(_0x5f1bx5), _0x5f1bxb['dragPage']['isFlipping'] !== !0 && _0x5f1bxb['prev']()) : _0x5f1bxb['dragPage']['isFlipping'] !== !0 && (_0x5f1bx5['distance'] > _0x5f1bx5['fullWidth'] / 2 ? _0x5f1bx5['x'] > _0x5f1bx5['fullWidth'] / 2 ? _0x5f1bxb['prev']() : _0x5f1bxb['next']() : (_0x5f1bxb['dragPage']['animateToReset'] = !0, _0x5f1bxb['animatePage'](_0x5f1bxb['dragPage']))), _0x5f1bxb['dragPage'] && (_0x5f1bxb['dragPage']['pendingPoint'] = void(0), _0x5f1bxb['dragPage']['magnetic'] = !1)
                            };
                            _0x5f1bxb['drag'] = _0x5f1bxd['none']
                        }
                    },
                    _0x5f1bx6 = function(_0x5f1bx3) {
                        if (!(void(0) !== _0x5f1bx3['touches'] && _0x5f1bx3['touches']['length'] > 1)) {
                            var _0x5f1bx5 = _0x5f1bxb['eventToPoint'](_0x5f1bx3);
                            _0x5f1bxb['startPoint'] = _0x5f1bx5, _0x5f1bxb['left'] = _0x5f1bxb['left'] || 0, _0x5f1bxb['top'] = _0x5f1bxb['top'] || 0, _0x5f1bxb['isPanning'] = !0, _0x5f1bxb['lastPos'] = _0x5f1bx5['x'], _0x5f1bxb['lastTime'] = performance['now'](), _0x5f1bxb['skipDrag'] !== !0 && (1 != _0x5f1bx5['isInside'] || _0x5f1bx9(_0x5f1bxb) || (_0x5f1bxb['startPoint'] = _0x5f1bx5, _0x5f1bxb['drag'] = _0x5f1bx5['drag'], _0x5f1bxb['dragPage'] = _0x5f1bx5['page'], _0x5f1bxb['corner'] = _0x5f1bx5['corner'], _0x5f1bx1b(_0x5f1bxb['corner']), _0x5f1bx8(_0x5f1bxb['dragPage']), _0x5f1bx5['page']['isHard'] || _0x5f1bx5['page']['updatePoint'](_0x5f1bx5, _0x5f1bxb), '0' == _0x5f1bx5['page']['name'] ? _0x5f1bxb['shadow']['css']({
                                width: '50%',
                                left: _0x5f1bxb['Flip_Direction'] == a['Flip_Direction']['RTL'] ? 0 : '50%',
                                transitionDelay: ''
                            }) : _0x5f1bx5['page']['name'] == Math['ceil'](_0x5f1bxb['pageCount'] / 2) - 1 && _0x5f1bxb['shadow']['css']({
                                width: '50%',
                                left: _0x5f1bxb['Flip_Direction'] == a['Flip_Direction']['RTL'] ? '50%' : 0,
                                transitionDelay: ''
                            })))
                        }
                    },
                    _0x5f1bxf = function(a) {
                        var _0x5f1bx3 = 0;
                        void(0) != a['wheelDelta'] ? _0x5f1bx3 = a['wheelDelta'] / 120 : void(0) !== a['detail'] && (_0x5f1bx3 = -a['detail'] / 3);
                        var _0x5f1bx5 = _0x5f1bxb['contentProvider']['zoomScale'],
                            _0x5f1bx7 = _0x5f1bxb['contentProvider']['maxZoom'];
                        if (_0x5f1bx3 && (_0x5f1bx3 > 0 && _0x5f1bx5 < _0x5f1bx7 || _0x5f1bx3 < 0 && _0x5f1bx5 > 1)) {
                            a['stopPropagation'](), a['preventDefault']();
                            var _0x5f1bx8 = _0x5f1bxb['eventToPoint'](a),
                                _0x5f1bx9 = _0x5f1bxb['eventToPoint'](a),
                                _0x5f1bxa = {
                                    x: _0x5f1bxb['container']['width']() / 2,
                                    y: -23 + _0x5f1bxb['container']['height']() / 2
                                };
                            _0x5f1bxb['previewObject']['zoom'](_0x5f1bx3);
                            var _0x5f1bxc = _0x5f1bxb['contentProvider']['zoomScale'];
                            if (_0x5f1bx5 !== _0x5f1bxc) {
                                var _0x5f1bxd = _0x5f1bxc / _0x5f1bx5;
                                1 == _0x5f1bxc ? (_0x5f1bxb['left'] = 0, _0x5f1bxb['top'] = 0) : (_0x5f1bxb['left'] *= _0x5f1bxd, _0x5f1bxb['top'] *= _0x5f1bxd);
                                var _0x5f1bx14 = (_0x5f1bx8['raw']['x'] - _0x5f1bxa['x']) * _0x5f1bxd,
                                    _0x5f1bxe = (_0x5f1bx8['raw']['y'] - _0x5f1bxa['y']) * _0x5f1bxd;
                                _0x5f1bx9['raw']['x'] = _0x5f1bxa['x'] + _0x5f1bx14, _0x5f1bx9['raw']['y'] = _0x5f1bxa['y'] + _0x5f1bxe, _0x5f1bxb['startPoint'] = _0x5f1bx9, _0x5f1bxb['pan'](_0x5f1bx8);
                                var _0x5f1bx6 = _0x5f1bxb['dragPage'] || _0x5f1bx8['page'];
                                void(0) == _0x5f1bxb['dragPage'] && void(0) !== _0x5f1bx6 && 1 == _0x5f1bx8['isInside'] && 1 == _0x5f1bx6['magnetic'] && (_0x5f1bx6['pendingPoint'] = _0x5f1bx8, _0x5f1bx6['animateToReset'] = !0, _0x5f1bxb['corner'] = _0x5f1bx6['magneticCorner'], _0x5f1bxb['animatePage'](_0x5f1bx6), _0x5f1bx6['pendingPoint'] = void(0), _0x5f1bx6['magnetic'] = !1, _0x5f1bx6['magneticCorner'] = void(0))
                            }
                        }
                    },
                    _0x5f1bx10 = _0x5f1bxb['container'][0],
                    _0x5f1bx11 = _0x5f1bxb['stage'][0];
                _0x5f1bx10 && (_0x5f1bx10['addEventListener']('mousemove', _0x5f1bx14, !1), _0x5f1bx10['addEventListener']('touchmove', _0x5f1bx14, !1), _0x5f1bx10['addEventListener']('mousedown', _0x5f1bx6, !1), _0x5f1bx10['addEventListener']('mouseup', _0x5f1bxe, !1), _0x5f1bx10['addEventListener']('touchend', _0x5f1bxe, !1), _0x5f1bx10['addEventListener']('touchstart', _0x5f1bx6, !1), 1 == _0x5f1bxb['options']['scrollWheel'] && (_0x5f1bx11['addEventListener']('mousewheel', _0x5f1bxf, !1), _0x5f1bx11['addEventListener']('DOMMouseScroll', _0x5f1bxf, !1))), this['dispose'] = function() {
                    _0x5f1bx10['removeEventListener']('mousemove', _0x5f1bx14, !1), _0x5f1bx10['removeEventListener']('touchmove', _0x5f1bx14, !1), _0x5f1bx10['removeEventListener']('mousedown', _0x5f1bx6, !1), _0x5f1bx10['removeEventListener']('mouseup', _0x5f1bxe, !1), _0x5f1bx10['removeEventListener']('touchend', _0x5f1bxe, !1), _0x5f1bx10['removeEventListener']('touchstart', _0x5f1bx6, !1), 1 == _0x5f1bxb['options']['scrollWheel'] && (_0x5f1bx11['removeEventListener']('mousewheel', _0x5f1bxf, !1), _0x5f1bx11['removeEventListener']('DOMMouseScroll', _0x5f1bxf, !1)), _0x5f1bxb['flipCallback'] = null, _0x5f1bxb['animateF'] = null, _0x5f1bxb['stage']['remove']()
                }
            }
            return _0x5f1bx24(_0x5f1bxa, _0x5f1bx5), _0x5f1bxa['prototype'] = {
                add: function(a) {
                    a instanceof _0x5f1bx2d ? this['container']['append'](_0x5f1bx3(a['element'])) : this['container']['append'](_0x5f1bx3(a))
                },
                pan: function(a) {
                    var _0x5f1bx3 = this['startPoint'],
                        _0x5f1bx7 = (this['contentProvider']['zoomScale'], this['left'] + (a['raw']['x'] - _0x5f1bx3['raw']['x'])),
                        _0x5f1bx8 = this['top'] + (a['raw']['y'] - _0x5f1bx3['raw']['y']);
                    this['left'] = _0x5f1bx18(_0x5f1bx7, -this['shiftWidth'], this['shiftWidth']), this['top'] = _0x5f1bx18(_0x5f1bx8, -this['shiftHeight'], this['shiftHeight']), this['startPoint'] = a, this['stage']['css']({
                        transform: 'translate3d(' + this['left'] + 'px,' + this['top'] + 'px,0)'
                    })
                },
                getPageByNumber: function(a) {
                    for (var _0x5f1bx5, _0x5f1bx3 = Math['floor']((a - 1) / 2), _0x5f1bx7 = 0; _0x5f1bx7 < this['pages']['length']; _0x5f1bx7++) {
                        _0x5f1bx3 == parseInt(this['pages'][_0x5f1bx7]['name'], 10) && (_0x5f1bx5 = this['pages'][_0x5f1bx7])
                    };
                    return _0x5f1bx5
                },
                getPageSide: function(_0x5f1bx3) {
                    var _0x5f1bx5 = this['Flip_Direction'] == a['Flip_Direction']['RTL'],
                        _0x5f1bx7 = this['getPageByNumber'](_0x5f1bx3);
                    if (void(0) != _0x5f1bx7) {
                        return _0x5f1bx3 % 2 == 0 ? _0x5f1bx5 ? _0x5f1bx7['back'] : _0x5f1bx7['front'] : _0x5f1bx5 ? _0x5f1bx7['front'] : _0x5f1bx7['back']
                    }
                },
                getContentLayer: function(a) {
                    var _0x5f1bx3 = this['getPageSide'](a);
                    return void(0) == _0x5f1bx3 ? void(0) : _0x5f1bx3['contentLayer']
                }
            }, _0x5f1bxa['prototype']['init'] = function(a) {
                var _0x5f1bx5 = this;
                _0x5f1bx5['stage'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: 'PDFFlip-book-stage'
                }), _0x5f1bx5['wrapper'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: 'PDFFlip-book-wrapper'
                }), _0x5f1bx5['shadow'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: 'PDFFlip-book-shadow'
                }), _0x5f1bx5['container']['append'](_0x5f1bx5['stage']), _0x5f1bx5['stage']['append'](_0x5f1bx5['wrapper']), _0x5f1bx5['wrapper']['append'](_0x5f1bx5['shadow']), _0x5f1bx5['createStack'](a)
            }, _0x5f1bxa['prototype']['createStack'] = function(a) {
                for (var _0x5f1bx3 = 'red,green,blue,yellow,orange,black' ['split'](','), _0x5f1bx5 = 0; _0x5f1bx5 < this['stackCount']; _0x5f1bx5++) {
                    a['angles'] = [, this['stackCount'] - _0x5f1bx5], a['stiffness'] = (this['stackCount'] - _0x5f1bx5) / 100;
                    var _0x5f1bx7 = new _0x5f1bx2d(a);
                    _0x5f1bx7['angles'][1] = 180, _0x5f1bx7['index'] = _0x5f1bx5, _0x5f1bx7['parent'] = this, _0x5f1bx7['textureReady'] = !1, _0x5f1bx7['textureRequested'] = !1, this['wrapper']['append'](_0x5f1bx7['element']), _0x5f1bx7['isFlipping'] = !1, this['pages']['push'](_0x5f1bx7), _0x5f1bx7['color'] = _0x5f1bx3[_0x5f1bx5]
                };
                this['children'] = this['pages']
            }, _0x5f1bxa['prototype']['isPageHard'] = function(a) {
                if (void(0) !== this['hardConfig']) {
                    var _0x5f1bx3 = this['hardConfig'];
                    if ('cover' == _0x5f1bx3) {
                        return 0 == a || a == Math['floor'](this['pageCount'] / 2) - 1
                    };
                    if ('all' == _0x5f1bx3) {
                        return !0
                    };
                    var _0x5f1bx5 = (',' + _0x5f1bx3 + ',')['indexOf'](',' + (2 * a + 1) + ',') > -1,
                        _0x5f1bx7 = (',' + _0x5f1bx3 + ',')['indexOf'](',' + (2 * a + 2) + ',') > -1;
                    return _0x5f1bx5 || _0x5f1bx7
                };
                return !1
            }, _0x5f1bxa['prototype']['setDuration'] = function(a) {
                this['duration'] = a
            }, _0x5f1bxa['prototype']['moveBy'] = function(a) {
                var _0x5f1bx3 = this['_activePage'] + a;
                _0x5f1bx3 = _0x5f1bx18(_0x5f1bx3, this['startPage'], this['endPage']), this['gotoPage'](_0x5f1bx3)
            }, _0x5f1bxa['prototype']['next'] = function(_0x5f1bx3) {
                void(0) == _0x5f1bx3 && (_0x5f1bx3 = this['Flip_Direction'] == a['Flip_Direction']['RTL'] ? -this['pageMode'] : this['pageMode']), this['moveBy'](_0x5f1bx3)
            }, _0x5f1bxa['prototype']['prev'] = function(_0x5f1bx3) {
                void(0) == _0x5f1bx3 && (_0x5f1bx3 = this['Flip_Direction'] == a['Flip_Direction']['RTL'] ? this['pageMode'] : -this['pageMode']), this['moveBy'](_0x5f1bx3)
            }, _0x5f1bxa['prototype']['eventToPoint'] = function(_0x5f1bx5) {
                _0x5f1bx5 = _0x5f1bx20(_0x5f1bx5);
                var _0x5f1bx7 = this['wrapper'],
                    _0x5f1bx8 = this['pages'],
                    _0x5f1bx9 = this['pageWidth'],
                    _0x5f1bxa = this['fullWidth'],
                    _0x5f1bxb = this['height'],
                    _0x5f1bx14 = (_0x5f1bx3(window), {
                        x: _0x5f1bx5['clientX'],
                        y: _0x5f1bx5['clientY']
                    }),
                    _0x5f1bxe = _0x5f1bx14['x'] - _0x5f1bx7[0]['getBoundingClientRect']()['left'],
                    _0x5f1bx6 = _0x5f1bx14['y'] - _0x5f1bx7[0]['getBoundingClientRect']()['top'];
                _0x5f1bx14['x'] = _0x5f1bx14['x'] - this['container'][0]['getBoundingClientRect']()['left'], _0x5f1bx14['y'] = _0x5f1bx14['y'] - this['container'][0]['getBoundingClientRect']()['top'];
                var _0x5f1bx16, _0x5f1bxf = this['drag'] == _0x5f1bxd['none'] ? _0x5f1bxe < _0x5f1bx9 ? _0x5f1bxe : _0x5f1bxa - _0x5f1bxe : this['drag'] == _0x5f1bxd['left'] ? _0x5f1bxe : _0x5f1bxa - _0x5f1bxe,
                    _0x5f1bx10 = _0x5f1bxe < _0x5f1bx9 ? _0x5f1bx8[this['stackCount'] / 2 - 1] : _0x5f1bx8[this['stackCount'] / 2],
                    _0x5f1bx11 = _0x5f1bxe < this['foldSense'] ? _0x5f1bxd['left'] : _0x5f1bxe > _0x5f1bxa - this['foldSense'] ? _0x5f1bxd['right'] : _0x5f1bxd['none'],
                    _0x5f1bx12 = _0x5f1bxe,
                    _0x5f1bx13 = _0x5f1bx6,
                    _0x5f1bx15 = _0x5f1bxb,
                    _0x5f1bx17 = _0x5f1bxa,
                    _0x5f1bx2b = this['foldSense'],
                    _0x5f1bx18 = a['CORNERS'];
                return _0x5f1bx16 = _0x5f1bx12 >= 0 && _0x5f1bx12 < _0x5f1bx2b ? _0x5f1bx13 >= 0 && _0x5f1bx13 <= _0x5f1bx2b ? _0x5f1bx18['TL'] : _0x5f1bx13 >= _0x5f1bx15 - _0x5f1bx2b && _0x5f1bx13 <= _0x5f1bx15 ? _0x5f1bx18['BL'] : _0x5f1bx13 > _0x5f1bx2b && _0x5f1bx13 < _0x5f1bx15 - _0x5f1bx2b ? _0x5f1bx18['L'] : _0x5f1bx18['NONE'] : _0x5f1bx12 >= _0x5f1bx17 - _0x5f1bx2b && _0x5f1bx12 <= _0x5f1bx17 ? _0x5f1bx13 >= 0 && _0x5f1bx13 <= _0x5f1bx2b ? _0x5f1bx18['TR'] : _0x5f1bx13 >= _0x5f1bx15 - _0x5f1bx2b && _0x5f1bx13 <= _0x5f1bx15 ? _0x5f1bx18['BR'] : _0x5f1bx13 > _0x5f1bx2b && _0x5f1bx13 < _0x5f1bx15 - _0x5f1bx2b ? _0x5f1bx18['R'] : _0x5f1bx18['NONE'] : _0x5f1bx18['NONE'], {
                    isInside: _0x5f1bx16 !== _0x5f1bx18['NONE'] && _0x5f1bx16 !== _0x5f1bx18['L'] && _0x5f1bx16 !== _0x5f1bx18['R'],
                    x: _0x5f1bxe,
                    y: _0x5f1bx6,
                    fullWidth: _0x5f1bxa,
                    rawDistance: _0x5f1bxa - _0x5f1bxe,
                    distance: _0x5f1bxf,
                    page: _0x5f1bx10,
                    drag: _0x5f1bx11,
                    foldSense: this['foldSense'],
                    event: _0x5f1bx5,
                    raw: _0x5f1bx14,
                    corner: _0x5f1bx16
                }
            }, _0x5f1bxa['prototype']['gotoPage'] = function(a) {
                a = parseInt(a, 10), this['_activePage'] = a, this['updatePage'](a)
            }, _0x5f1bxa['prototype']['refresh'] = function() {
                this['updatePage'](this._activePage), void(0) !== this['flipCallback'] && this['flipCallback']()
            }, _0x5f1bxa['prototype']['updatePage'] = function(_0x5f1bx5) {
                var _0x5f1bx7 = this['Flip_Direction'] == a['Flip_Direction']['RTL'];
                _0x5f1bx5 = Math['floor'](_0x5f1bx5 / 2), _0x5f1bx7 && (_0x5f1bx5 = Math['floor'](this['pageCount'] / 2) - _0x5f1bx5);
                var _0x5f1bx8 = this['oldBaseNumber'] || 0,
                    _0x5f1bx9 = this['pageCount'] / 2,
                    _0x5f1bxa = this['stackCount'],
                    _0x5f1bxb = Math['floor'](_0x5f1bxa / 2);
                _0x5f1bx8 > _0x5f1bx5 ? (this['children'][_0x5f1bxa - 1]['skipFlip'] = !0, this['children']['unshift'](this['children']['pop']())) : _0x5f1bx8 < _0x5f1bx5 && (this['children'][0]['skipFlip'] = !0, this['children']['push'](this['children']['shift']()));
                for (var _0x5f1bxc = 0; _0x5f1bxc < _0x5f1bxa; _0x5f1bxc++) {
                    var _0x5f1bx14 = this['children'][_0x5f1bxc];
                    _0x5f1bx8 !== _0x5f1bx5 && void(0) !== _0x5f1bx14['currentTween'] && _0x5f1bx14['clearTween'](!0);
                    var _0x5f1bx6, _0x5f1bxe = _0x5f1bx14['side'],
                        _0x5f1bxf = _0x5f1bx5 - _0x5f1bxb + _0x5f1bxc,
                        _0x5f1bx10 = _0x5f1bx14['name'];
                    _0x5f1bx14['isHard'] = this['isPageHard'](_0x5f1bxf), _0x5f1bx14['isHard'] ? _0x5f1bx14['element']['addClass']('PDFFlip-hard-page') : (_0x5f1bx14['element']['removeClass']('PDFFlip-hard-page'), _0x5f1bx14['front']['css']({
                        display: 'block'
                    }), _0x5f1bx14['back']['css']({
                        display: 'block'
                    }));
                    var _0x5f1bx11 = _0x5f1bx3(_0x5f1bx14['element'])['attr']('pageNumber');
                    _0x5f1bx11 != _0x5f1bxf && (_0x5f1bx14['front']['contentLayer']['empty'](), _0x5f1bx14['back']['contentLayer']['empty']()), _0x5f1bx3(_0x5f1bx14['element'])['attr']('pageNumber', _0x5f1bxf), _0x5f1bx14['visible'] = _0x5f1bxf >= 0 && _0x5f1bxf < _0x5f1bx9, void(0) !== this['requestPage'] && 1 == _0x5f1bx14['visible'] && (_0x5f1bx7 && (_0x5f1bxf = Math['floor'](this['pageCount'] / 2) - _0x5f1bxf - 1), _0x5f1bx14['name'] = _0x5f1bxf.toString(), _0x5f1bx14['name'] != _0x5f1bx10 && (_0x5f1bx14['backTextureLoaded'] = !1, _0x5f1bx14['frontTextureLoaded'] = !1, _0x5f1bx14['thumbLoaded'] = !1, this['requestPage'](2 * _0x5f1bxf + 1), this['requestPage'](2 * _0x5f1bxf + 2))), _0x5f1bx14['isEdge'] = !1, 0 == _0x5f1bxc || _0x5f1bxc == _0x5f1bxa - 1 || (_0x5f1bx14['isEdge'] = !1), _0x5f1bx6 = _0x5f1bxc < _0x5f1bxb ? _0x5f1bxd['left'] : _0x5f1bxd['right'], 0 == _0x5f1bx14['isFlipping'] && (_0x5f1bx6 !== _0x5f1bxe && 0 == _0x5f1bx14['skipFlip'] ? (this['animatePage'](_0x5f1bx14), void(0) !== this['preFlipCallback'] && this['preFlipCallback']()) : (_0x5f1bx14['skipFlip'] = !1, _0x5f1bx14['element']['removeClass']('PDFFlip-flipping PDFFlip-quick-turn PDFFlip-folding PDFFlip-left-side PDFFlip-right-side'), _0x5f1bx14['element']['addClass'](_0x5f1bxc < _0x5f1bxb ? 'PDFFlip-left-side' : 'PDFFlip-right-side'), _0x5f1bx14['side'] = _0x5f1bx6)), _0x5f1bx14['oldDepth'] = _0x5f1bx14['depth'], _0x5f1bx14['updateCSS']({
                        display: 1 == _0x5f1bx14['visible'] ? 'block' : 'none',
                        zIndex: 6 + (_0x5f1bxc < _0x5f1bxb ? _0x5f1bxc - _0x5f1bxb : _0x5f1bxb - _0x5f1bxc),
                        transform: ''
                    }), void(0) == _0x5f1bx14['pendingPoint'] && _0x5f1bx14['resetCSS']()
                };
                0 == TWEEN['getAll']()['length'] && clearInterval(this['animate']), _0x5f1bx3('.quick-hint')['html'](_0x5f1bx5), this['oldBaseNumber'] = _0x5f1bx5, void(0) !== this['updatePageCallback'] && this['updatePageCallback']()
            }, _0x5f1bxa['prototype']['animatePage'] = function(a) {
                a['element']['addClass']('PDFFlip-flipping'), a['isFlipping'] = !0, void(0) !== this['animate'] && clearInterval(this['animate']), this['animate'] = setInterval(this['animateF'], 30), a['tween'](a['pendingPoint'])
            }, _0x5f1bxa
        }({}),
        _0x5f1bx2f = function(_0x5f1bx5) {
            function _0x5f1bx7(_0x5f1bx7, _0x5f1bx8, _0x5f1bx9) {
                _0x5f1bx5['call'](this, _0x5f1bx9);
                var _0x5f1bxa = this;
                _0x5f1bxa['type'] = 'FlipBook', _0x5f1bxa['container'] = _0x5f1bx7, _0x5f1bxa['options'] = _0x5f1bx9, _0x5f1bxa['options']['source'] = _0x5f1bx8, _0x5f1bxa['contentSource'] = _0x5f1bx8, void(0) !== _0x5f1bx9['height'] && _0x5f1bx9['height'].toString()['indexOf']('%') < 0 ? _0x5f1bxa['container']['height'](Math['min'](_0x5f1bx9['height'], _0x5f1bx3(window)['height']())) : _0x5f1bxa['container']['height'](_0x5f1bx9['height']), _0x5f1bxa['options']['isLightBox'] || void(0) === _0x5f1bxa['container']['attr']('id') || (_0x5f1bxa['options']['id'] = _0x5f1bxa['container']['attr']('id')), _0x5f1bxa['options']['parsed'] !== !0 && void(0) != _0x5f1bxa['options']['links'] && a['parseLinks'](_0x5f1bxa['options']['links']);
                var _0x5f1bxb = _0x5f1bxa['webgl'] = 1 == _0x5f1bx9['webgl'] && 1 == _0x5f1bx23;
                return _0x5f1bx7['addClass']('PDFFlip-holder PDFFlip-loading PDFFlip-init PDFFlip-Geo'), 1 == _0x5f1bxa['options']['transparent'] && _0x5f1bx7['addClass']('PDFFlip-transparent'), _0x5f1bxa['container']['info'] = _0x5f1bx3(_0x5f1bxe['div'], {
                    class: 'loading-info'
                })['appendTo'](_0x5f1bxa['container'])['html']('Loadingx'), (navigator['userAgent']['indexOf']('MSIE') !== -1 || navigator['appVersion']['indexOf']('Trident/') > 0) && (_0x5f1bxa['options']['webgl'] = !1), navigator['userAgent']['match'](/msie\s[5-9]/i) ? (_0x5f1bxa['container']['info']['html']('You are using an out of date browser. <br><a href=\'http://browsehappy.com/\'>Upgrade to a new one</a>')['addClass']('PDFFlip-old-browser'), _0x5f1bx7['removeClass']('PDFFlip-loading'), _0x5f1bxa) : (_0x5f1bxa['container']['css']({
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: _0x5f1bx9['Main_Background_Color'],
                    backgroundImage: 'url(\'' + _0x5f1bx9['Main_Background_Image'] + '\')'
                }), _0x5f1bxa['init'](_0x5f1bxb, _0x5f1bx8), void(0) !== _0x5f1bxa['options']['onCreate'] && _0x5f1bxa['options']['onCreate'](), _0x5f1bxa)
            }
            return _0x5f1bx24(_0x5f1bx7, _0x5f1bx5), _0x5f1bx7['prototype']['init'] = function(_0x5f1bx5) {
                var _0x5f1bx7 = this,
                    _0x5f1bx8 = _0x5f1bx7['target'],
                    _0x5f1bx9 = _0x5f1bx7['options'];
                1 == _0x5f1bx5 ? _0x5f1bx27(function() {
                    _0x5f1bx7['container']['css']({
                        minHeight: 300,
                        minWidth: 300
                    }), _0x5f1bx7['stage'] = new _0x5f1bx28(_0x5f1bx1d(_0x5f1bx7['options'], {
                        container: _0x5f1bx7['container']
                    })), _0x5f1bx7['stage']['previewObject'] = _0x5f1bx7, _0x5f1bx7['contentProvider'] = new _0x5f1bx2c(_0x5f1bx7['contentSource'], function(_0x5f1bx9) {
                        var _0x5f1bxa = {
                            pageCount: _0x5f1bx9['pageCount'],
                            stackCount: 6,
                            segments: 20,
                            width: 300 * _0x5f1bx9['pageRatio'],
                            height: 300
                        };
                        _0x5f1bx7['checkOpenPage'](), _0x5f1bx7['target'] = _0x5f1bx8 = _0x5f1bx7['stage']['target'] = new MOCKUP.Book(_0x5f1bx1d(_0x5f1bx7['options'], _0x5f1bxa), _0x5f1bx7['stage']), _0x5f1bx26(_0x5f1bx7['container'], _0x5f1bx7), _0x5f1bx8['ui'] = _0x5f1bx7['ui'], _0x5f1bx8['container'] = _0x5f1bx7['container'], _0x5f1bx9['webgl'] = _0x5f1bx5, _0x5f1bx9['setTarget'](_0x5f1bx7['target']), _0x5f1bx8['getContentLayer'] = function(_0x5f1bx3) {
                            var _0x5f1bx5 = _0x5f1bx8['Flip_Direction'] == a['Flip_Direction']['RTL'],
                                _0x5f1bx9 = _0x5f1bx7['stage']['cssScene']['divLeft']['element'],
                                _0x5f1bxa = _0x5f1bx7['stage']['cssScene']['divRight']['element'];
                            _0x5f1bx1e(_0x5f1bx8._activePage);
                            return _0x5f1bx3 % 2 == 0 ? _0x5f1bx5 ? _0x5f1bxa : _0x5f1bx9 : _0x5f1bx5 ? _0x5f1bx9 : _0x5f1bxa
                        }, _0x5f1bx8['stage'] = _0x5f1bx7['stage'], _0x5f1bx8['flipCallback'] = function() {
                            _0x5f1bx7['contentProvider']['review']('flipCallback');
                            var _0x5f1bx9, _0x5f1bxa, _0x5f1bx5 = _0x5f1bx1e(_0x5f1bx8._activePage),
                                _0x5f1bxb = _0x5f1bx8['getPageByNumber'](_0x5f1bx5),
                                _0x5f1bxc = _0x5f1bx8['getPageByNumber'](_0x5f1bx5 + 1),
                                _0x5f1bxd = _0x5f1bx8['parent']['cssScene']['divLeft'],
                                _0x5f1bx14 = _0x5f1bx8['parent']['cssScene']['divRight'];
                            _0x5f1bx8['pageMode'] == a['PAGE_MODE']['SINGLE'], _0x5f1bx8['Flip_Direction'] == a['Flip_Direction']['RTL'];
                            void(0) !== _0x5f1bxb && void(0) !== _0x5f1bxd && (_0x5f1bx9 = Math['abs'](_0x5f1bxb['geometry']['boundingBox']['max']['x'] - _0x5f1bxb['geometry']['boundingBox']['min']['x']), _0x5f1bxa = Math['abs'](_0x5f1bxb['geometry']['boundingBox']['max']['z'] - _0x5f1bxb['geometry']['boundingBox']['min']['z']), _0x5f1bxd['rotation']['y'] = 0.9 * -Math['atan2'](_0x5f1bxa, _0x5f1bx9), _0x5f1bxd['position']['z'] = 0.8 * _0x5f1bxa, _0x5f1bxd['position']['x'] = _0x5f1bxa / 2.5, _0x5f1bx3(_0x5f1bxd['element'])['css']({
                                width: _0x5f1bx9,
                                left: -_0x5f1bx9 / 2
                            })), void(0) !== _0x5f1bxc && void(0) !== _0x5f1bx14 && (_0x5f1bx9 = Math['abs'](_0x5f1bxc['geometry']['boundingBox']['max']['x'] - _0x5f1bxc['geometry']['boundingBox']['min']['x']), _0x5f1bxa = Math['abs'](_0x5f1bxc['geometry']['boundingBox']['max']['z'] - _0x5f1bxc['geometry']['boundingBox']['min']['z']), _0x5f1bx14['rotation']['y'] = 0.9 * Math['atan2'](_0x5f1bxa, _0x5f1bx9), _0x5f1bx14['position']['z'] = 0.8 * _0x5f1bxa, _0x5f1bx14['position']['x'] = -_0x5f1bxa / 2.5, _0x5f1bx3(_0x5f1bx14['element'])['css']({
                                width: _0x5f1bx9,
                                left: _0x5f1bx9 / 2
                            })), void(0) !== _0x5f1bx7['options']['onFlip'] && _0x5f1bx7['options']['onFlip']()
                        }, _0x5f1bx8['resize'] = function() {
                            _0x5f1bx7['resize']()
                        }(), _0x5f1bx8['updatePageCallback'] = function() {
                            _0x5f1bx7['ui']['update'](), _0x5f1bx7['checkCenter'](), _0x5f1bx7['stage']['renderRequestPending'] = !0
                        };
                        var _0x5f1bxb = _0x5f1bx3(_0x5f1bx7['stage']['cssScene']['divLeft']['element']),
                            _0x5f1bxc = _0x5f1bx3(_0x5f1bx7['stage']['cssScene']['divRight']['element']);
                        _0x5f1bx8['preFlipCallback'] = function() {
                            _0x5f1bxb['empty'](), _0x5f1bxc['empty'](), void(0) !== _0x5f1bx7['options']['beforeFlip'] && _0x5f1bx7['options']['beforeFlip'](), _0x5f1bx7['playSound']()
                        }, _0x5f1bx3(window)['trigger']('resize'), _0x5f1bxb['css']({
                            width: 300 * _0x5f1bx9['pageRatio'],
                            height: 300,
                            left: -300 * _0x5f1bx9['pageRatio'] / 2
                        }), _0x5f1bxc['css']({
                            width: 300 * _0x5f1bx9['pageRatio'],
                            height: 300,
                            left: 300 * _0x5f1bx9['pageRatio'] / 2
                        }), _0x5f1bx8['ease'] = TWEEN['Easing']['Cubic']['InOut'], _0x5f1bx8['contentProvider'] = _0x5f1bx9, _0x5f1bx8['duration'] = _0x5f1bx7['options']['duration'], _0x5f1bx8['gotoPage'](_0x5f1bx8._activePage), _0x5f1bx8['flipCallback'](), void(0) !== _0x5f1bx7['options']['onReady'] && _0x5f1bx7['options']['onReady']()
                    }, _0x5f1bx9, _0x5f1bx7)
                }) : _0x5f1bx7['contentProvider'] = new _0x5f1bx2c(_0x5f1bx7['contentSource'], function(a) {
                    var _0x5f1bx9 = {
                        pageCount: a['pageCount']
                    };
                    _0x5f1bx7['checkOpenPage'](), _0x5f1bx7['target'] = _0x5f1bx8 = new _0x5f1bx2e(_0x5f1bx1d(_0x5f1bx7['options'], _0x5f1bx9), _0x5f1bx7['container']), _0x5f1bx7['target']['previewObject'] = _0x5f1bx7, _0x5f1bx26(_0x5f1bx7['container'], _0x5f1bx7), a['webgl'] = _0x5f1bx5, a['setTarget'](_0x5f1bx7['target']), a['waitPeriod'] = 2, _0x5f1bx8['ease'] = TWEEN['Easing']['Quadratic']['InOut'], _0x5f1bx8['duration'] = _0x5f1bx7['options']['duration'], _0x5f1bx8['container'] = _0x5f1bx7['container'], _0x5f1bx8['updatePageCallback'] = function() {
                        _0x5f1bx7['ui']['update'](), _0x5f1bx7['checkCenter']()
                    }, _0x5f1bx8['gotoPage'](_0x5f1bx8._activePage), _0x5f1bx8['resize'] = function() {
                        _0x5f1bx7['resize']()
                    }(), _0x5f1bx3(window)['trigger']('resize'), _0x5f1bx8['flipCallback'] = function() {
                        _0x5f1bx7['contentProvider']['review']('flipCallback'), void(0) !== _0x5f1bx7['options']['onFlip'] && _0x5f1bx7['options']['onFlip']()
                    }, _0x5f1bx8['preFlipCallback'] = function() {
                        void(0) !== _0x5f1bx7['options']['beforeFlip'] && _0x5f1bx7['options']['beforeFlip'](), _0x5f1bx7['playSound']()
                    }, void(0) !== _0x5f1bx7['options']['onReady'] && _0x5f1bx7['options']['onReady']()
                }, _0x5f1bx9, _0x5f1bx7)
            }, _0x5f1bx7['prototype']['getURLHash'] = function() {
                if (void(0) != this['options']['id']) {
                    var a = 'PDFFlip-' + this['options']['id'] + '/';
                    void(0) != this['target'] && void(0) != this['target']['_activePage'] && (a += this['target']['_activePage'] + '/'), window['location']['hash'] = a
                };
                return window['location']['href']
            }, _0x5f1bx7['prototype']['checkOpenPage'] = function() {
                if (void(0) != this['options']['id']) {
                    var a = _0x5f1bx3('#' + this['options']['id']);
                    if (a['length'] > 0 && void(0) !== a['data']('page')) {
                        var _0x5f1bx5 = parseInt(a['data']('page'), 10);
                        isNaN(_0x5f1bx5) || (this['options']['openPage'] = _0x5f1bx5)
                    }
                }
            }, _0x5f1bx7['prototype']['end'] = function() {
                this['target']['gotoPage'](this['target']['endPage'])
            }, _0x5f1bx7['prototype']['gotoPage'] = function(a) {
                this['target']['gotoPage'](a), void(0) !== this['ui'] && this['ui']['update']()
            }, _0x5f1bx7['prototype']['prev'] = function() {
                this['target']['prev']()
            }, _0x5f1bx7['prototype']['next'] = function() {
                this['target']['next']()
            }, _0x5f1bx7['prototype']['updateInfo'] = function(a) {
                this['container'] && this['container']['info'] && this['container']['info']['html'] && this['container']['info']['html'](a)
            }, _0x5f1bx7
        }(_0x5f1bx29);
    _0x5f1bx3['fn']['extend']({
        shelf: function() {},
        flipBook: function(a, _0x5f1bx5) {
            return new _0x5f1bx2f(_0x5f1bx3(this), a, _0x5f1bx25(_0x5f1bx5))
        }
    })
}(PDFFlip, jQuery),
function(a) {
    if (a['URL'] = a['URL'] || a['webkitURL'], a['Blob'] && a['URL']) {
        try {
            return void(new Blob)
        } catch (a) {}
    };
    var _0x5f1bx3 = a['BlobBuilder'] || a['WebKitBlobBuilder'] || a['MozBlobBuilder'] || function(a) {
        var _0x5f1bx3 = function(a) {
                return Object['prototype']['toString']['call'](a)['match'](/^\[object\s(.*)\]$/)[1]
            },
            _0x5f1bx5 = function() {
                this['data'] = []
            },
            _0x5f1bx7 = function(_0x5f1bx3, _0x5f1bx5, _0x5f1bx7) {
                this['data'] = _0x5f1bx3, this['size'] = _0x5f1bx3['length'], this['type'] = _0x5f1bx5, this['encoding'] = _0x5f1bx7
            },
            _0x5f1bx8 = _0x5f1bx5['prototype'],
            _0x5f1bx9 = _0x5f1bx7['prototype'],
            _0x5f1bxa = a['FileReaderSync'],
            _0x5f1bxb = function(a) {
                this['code'] = this[this['name'] = a]
            },
            _0x5f1bxc = 'NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR' ['split'](' '),
            _0x5f1bxd = _0x5f1bxc['length'],
            _0x5f1bx14 = a['URL'] || a['webkitURL'] || a,
            _0x5f1bxe = _0x5f1bx14['createObjectURL'],
            _0x5f1bx6 = _0x5f1bx14['revokeObjectURL'],
            _0x5f1bxf = _0x5f1bx14,
            _0x5f1bx10 = a['btoa'],
            _0x5f1bx11 = a['atob'],
            _0x5f1bx12 = a['ArrayBuffer'],
            _0x5f1bx13 = a['Uint8Array'],
            _0x5f1bx15 = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for (_0x5f1bx7['fake'] = _0x5f1bx9['fake'] = !0; _0x5f1bxd--;) {
            _0x5f1bxb['prototype'][_0x5f1bxc[_0x5f1bxd]] = _0x5f1bxd + 1
        };
        return _0x5f1bx14['createObjectURL'] || (_0x5f1bxf = a['URL'] = function(a) {
            var _0x5f1bx5, _0x5f1bx3 = document['createElementNS']('http://www.w3.org/1999/xhtml', 'a');
            return _0x5f1bx3['href'] = a, 'origin' in _0x5f1bx3 || ('data:' === _0x5f1bx3['protocol']['toLowerCase']() ? _0x5f1bx3['origin'] = null : (_0x5f1bx5 = a['match'](_0x5f1bx15), _0x5f1bx3['origin'] = _0x5f1bx5 && _0x5f1bx5[1])), _0x5f1bx3
        }), _0x5f1bxf['createObjectURL'] = function(a) {
            var _0x5f1bx5, _0x5f1bx3 = a['type'];
            return null === _0x5f1bx3 && (_0x5f1bx3 = 'application/octet-stream'), a instanceof _0x5f1bx7 ? (_0x5f1bx5 = 'data:' + _0x5f1bx3, 'base64' === a['encoding'] ? _0x5f1bx5 + ';base64,' + a['data'] : 'URI' === a['encoding'] ? _0x5f1bx5 + ',' + decodeURIComponent(a['data']) : _0x5f1bx10 ? _0x5f1bx5 + ';base64,' + _0x5f1bx10(a['data']) : _0x5f1bx5 + ',' + encodeURIComponent(a['data'])) : _0x5f1bxe ? _0x5f1bxe['call'](_0x5f1bx14, a) : void(0)
        }, _0x5f1bxf['revokeObjectURL'] = function(a) {
            'data:' !== a['substring'](0, 5) && _0x5f1bx6 && _0x5f1bx6['call'](_0x5f1bx14, a)
        }, _0x5f1bx8['append'] = function(a) {
            var _0x5f1bx5 = this['data'];
            if (_0x5f1bx13 && (a instanceof _0x5f1bx12 || a instanceof _0x5f1bx13)) {
                for (var _0x5f1bx8 = '', _0x5f1bx9 = new _0x5f1bx13(a), _0x5f1bxc = 0, _0x5f1bxd = _0x5f1bx9['length']; _0x5f1bxc < _0x5f1bxd; _0x5f1bxc++) {
                    _0x5f1bx8 += String['fromCharCode'](_0x5f1bx9[_0x5f1bxc])
                };
                _0x5f1bx5['push'](_0x5f1bx8)
            } else {
                if ('Blob' === _0x5f1bx3(a) || 'File' === _0x5f1bx3(a)) {
                    if (!_0x5f1bxa) {
                        throw new _0x5f1bxb('NOT_READABLE_ERR')
                    };
                    var _0x5f1bx14 = new _0x5f1bxa;
                    _0x5f1bx5['push'](_0x5f1bx14['readAsBinaryString'](a))
                } else {
                    a instanceof _0x5f1bx7 ? 'base64' === a['encoding'] && _0x5f1bx11 ? _0x5f1bx5['push'](_0x5f1bx11(a['data'])) : 'URI' === a['encoding'] ? _0x5f1bx5['push'](decodeURIComponent(a['data'])) : 'raw' === a['encoding'] && _0x5f1bx5['push'](a['data']) : ('string' != typeof a && (a += ''), _0x5f1bx5['push'](unescape(encodeURIComponent(a))))
                }
            }
        }, _0x5f1bx8['getBlob'] = function(a) {
            return arguments['length'] || (a = null), new _0x5f1bx7(this['data']['join'](''), a, 'raw')
        }, _0x5f1bx8['toString'] = function() {
            return '[object BlobBuilder]'
        }, _0x5f1bx9['slice'] = function(a, _0x5f1bx3, _0x5f1bx5) {
            var _0x5f1bx8 = arguments['length'];
            return _0x5f1bx8 < 3 && (_0x5f1bx5 = null), new _0x5f1bx7(this['data']['slice'](a, _0x5f1bx8 > 1 ? _0x5f1bx3 : this['data']['length']), _0x5f1bx5, this['encoding'])
        }, _0x5f1bx9['toString'] = function() {
            return '[object Blob]'
        }, _0x5f1bx9['close'] = function() {
            this['size'] = 0, delete this['data']
        }, _0x5f1bx5
    }(a);
    a['Blob'] = function(a, _0x5f1bx5) {
        var _0x5f1bx7 = _0x5f1bx5 ? _0x5f1bx5['type'] || '' : '',
            _0x5f1bx8 = new _0x5f1bx3;
        if (a) {
            for (var _0x5f1bx9 = 0, _0x5f1bxa = a['length']; _0x5f1bx9 < _0x5f1bxa; _0x5f1bx9++) {
                Uint8Array && a[_0x5f1bx9] instanceof Uint8Array ? _0x5f1bx8['append'](a[_0x5f1bx9]['buffer']) : _0x5f1bx8['append'](a[_0x5f1bx9])
            }
        };
        var _0x5f1bxb = _0x5f1bx8['getBlob'](_0x5f1bx7);
        return !_0x5f1bxb['slice'] && _0x5f1bxb['webkitSlice'] && (_0x5f1bxb['slice'] = _0x5f1bxb['webkitSlice']), _0x5f1bxb
    };
    var _0x5f1bx5 = Object['getPrototypeOf'] || function(a) {
        return a['__proto__']
    };
    a['Blob']['prototype'] = _0x5f1bx5(new a.Blob)
}(window),
function(a) {
    var _0x5f1bxa, _0x5f1bx3 = a['Uint8Array'],
        _0x5f1bx5 = a['HTMLCanvasElement'],
        _0x5f1bx7 = _0x5f1bx5 && _0x5f1bx5['prototype'],
        _0x5f1bx8 = /\s*;\s*base64\s*(?:;|$)/i,
        _0x5f1bx9 = 'toDataURL',
        _0x5f1bxb = function(a) {
            for (var _0x5f1bx14, _0x5f1bxe, _0x5f1bx5 = a['length'], _0x5f1bx7 = new _0x5f1bx3(_0x5f1bx5 / 4 * 3 | 0), _0x5f1bx8 = 0, _0x5f1bx9 = 0, _0x5f1bxb = [0, 0], _0x5f1bxc = 0, _0x5f1bxd = 0; _0x5f1bx5--;) {
                _0x5f1bxe = a['charCodeAt'](_0x5f1bx8++), _0x5f1bx14 = _0x5f1bxa[_0x5f1bxe - 43], 255 !== _0x5f1bx14 && void(0) !== _0x5f1bx14 && (_0x5f1bxb[1] = _0x5f1bxb[0], _0x5f1bxb[0] = _0x5f1bxe, _0x5f1bxd = _0x5f1bxd << 6 | _0x5f1bx14, _0x5f1bxc++, 4 === _0x5f1bxc && (_0x5f1bx7[_0x5f1bx9++] = _0x5f1bxd >>> 16, 61 !== _0x5f1bxb[1] && (_0x5f1bx7[_0x5f1bx9++] = _0x5f1bxd >>> 8), 61 !== _0x5f1bxb[0] && (_0x5f1bx7[_0x5f1bx9++] = _0x5f1bxd), _0x5f1bxc = 0))
            };
            return _0x5f1bx7
        };
    _0x5f1bx3 && (_0x5f1bxa = new _0x5f1bx3([62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51])), _0x5f1bx5 && !_0x5f1bx7['toBlob'] && (_0x5f1bx7['toBlob'] = function(a, _0x5f1bx5) {
        if (_0x5f1bx5 || (_0x5f1bx5 = 'image/png'), this['mozGetAsFile']) {
            return void(a)(this['mozGetAsFile']('canvas', _0x5f1bx5))
        };
        if (this['msToBlob'] && /^\s*image\/png\s*(?:$|;)/i ['test'](_0x5f1bx5)) {
            return void(a)(this['msToBlob']())
        };
        var _0x5f1bxe, _0x5f1bx7 = Array['prototype']['slice']['call'](arguments, 1),
            _0x5f1bxa = this[_0x5f1bx9]['apply'](this, _0x5f1bx7),
            _0x5f1bxc = _0x5f1bxa['indexOf'](','),
            _0x5f1bxd = _0x5f1bxa['substring'](_0x5f1bxc + 1),
            _0x5f1bx14 = _0x5f1bx8['test'](_0x5f1bxa['substring'](0, _0x5f1bxc));
        Blob['fake'] ? (_0x5f1bxe = new Blob, _0x5f1bx14 ? _0x5f1bxe['encoding'] = 'base64' : _0x5f1bxe['encoding'] = 'URI', _0x5f1bxe['data'] = _0x5f1bxd, _0x5f1bxe['size'] = _0x5f1bxd['length']) : _0x5f1bx3 && (_0x5f1bxe = _0x5f1bx14 ? new Blob([_0x5f1bxb(_0x5f1bxd)], {
            type: _0x5f1bx5
        }) : new Blob([decodeURIComponent(_0x5f1bxd)], {
            type: _0x5f1bx5
        })), a(_0x5f1bxe)
    }, _0x5f1bx7['toDataURLHD'] ? _0x5f1bx7['toBlobHD'] = function() {
        _0x5f1bx9 = 'toDataURLHD';
        var a = this['toBlob']();
        return _0x5f1bx9 = 'toDataURL', a
    } : _0x5f1bx7['toBlobHD'] = _0x5f1bx7['toBlob'])
}(window),
function() {
    if ('performance' in window == !1 && (window['performance'] = {}), Date['now'] = Date['now'] || function() {
            return (new Date)['getTime']()
        }, 'now' in window['performance'] == !1) {
        var _0x5f1bx3 = window['performance']['timing'] && window['performance']['timing']['navigationStart'] ? window['performance']['timing']['navigationStart'] : Date['now']();
        window['performance']['now'] = function() {
            return Date['now']() - _0x5f1bx3
        }
    }
}(),
function() {
    var _0x5f1bx3 = _0x5f1bx3 || function() {
        var a = [];
        return {
            getAll: function() {
                return a
            },
            removeAll: function() {
                a = []
            },
            add: function(_0x5f1bx3) {
                a['push'](_0x5f1bx3)
            },
            remove: function(_0x5f1bx3) {
                var _0x5f1bx5 = a['indexOf'](_0x5f1bx3);
                _0x5f1bx5 !== -1 && a['splice'](_0x5f1bx5, 1)
            },
            update: function(_0x5f1bx3) {
                if (0 === a['length']) {
                    return !1
                };
                var _0x5f1bx5 = 0;
                for (_0x5f1bx3 = void(0) !== _0x5f1bx3 ? _0x5f1bx3 : window['performance']['now'](); _0x5f1bx5 < a['length'];) {
                    a[_0x5f1bx5]['update'](_0x5f1bx3) ? _0x5f1bx5++ : a['splice'](_0x5f1bx5, 1)
                };
                return !0
            }
        }
    }();
    _0x5f1bx3['Tween'] = function(a) {
        var _0x5f1bx5 = a,
            _0x5f1bx7 = {},
            _0x5f1bx8 = {},
            _0x5f1bx9 = {},
            _0x5f1bxa = 1e3,
            _0x5f1bxb = 0,
            _0x5f1bxc = !1,
            _0x5f1bxd = !1,
            _0x5f1bx14 = !1,
            _0x5f1bxe = 0,
            _0x5f1bx6 = null,
            _0x5f1bxf = _0x5f1bx3['Easing']['Linear']['None'],
            _0x5f1bx10 = _0x5f1bx3['Interpolation']['Linear'],
            _0x5f1bx11 = [],
            _0x5f1bx12 = null,
            _0x5f1bx13 = !1,
            _0x5f1bx15 = null,
            _0x5f1bx17 = null,
            _0x5f1bx2b = null;
        for (var _0x5f1bx18 in a) {
            _0x5f1bx7[_0x5f1bx18] = parseFloat(a[_0x5f1bx18], 10)
        };
        this['to'] = function(a, _0x5f1bx3) {
            return void(0) !== _0x5f1bx3 && (_0x5f1bxa = _0x5f1bx3), _0x5f1bx8 = a, this
        }, this['start'] = function(a) {
            _0x5f1bx3['add'](this), _0x5f1bxd = !0, _0x5f1bx13 = !1, _0x5f1bx6 = void(0) !== a ? a : window['performance']['now'](), _0x5f1bx6 += _0x5f1bxe;
            for (var _0x5f1bxa in _0x5f1bx8) {
                if (_0x5f1bx8[_0x5f1bxa] instanceof Array) {
                    if (0 === _0x5f1bx8[_0x5f1bxa]['length']) {
                        continue
                    };
                    _0x5f1bx8[_0x5f1bxa] = [_0x5f1bx5[_0x5f1bxa]]['concat'](_0x5f1bx8[_0x5f1bxa])
                };
                void(0) !== _0x5f1bx7[_0x5f1bxa] && (_0x5f1bx7[_0x5f1bxa] = _0x5f1bx5[_0x5f1bxa], _0x5f1bx7[_0x5f1bxa] instanceof Array == !1 && (_0x5f1bx7[_0x5f1bxa] *= 1), _0x5f1bx9[_0x5f1bxa] = _0x5f1bx7[_0x5f1bxa] || 0)
            };
            return this
        }, this['stop'] = function() {
            return _0x5f1bxd ? (_0x5f1bx3['remove'](this), _0x5f1bxd = !1, null !== _0x5f1bx2b && _0x5f1bx2b['call'](_0x5f1bx5), this['stopChainedTweens'](), this) : this
        }, this['stopChainedTweens'] = function() {
            for (var a = 0, _0x5f1bx3 = _0x5f1bx11['length']; a < _0x5f1bx3; a++) {
                _0x5f1bx11[a]['stop']()
            }
        }, this['complete'] = function() {
            return _0x5f1bxd ? (_0x5f1bx3['remove'](this), _0x5f1bxd = !1, null !== _0x5f1bx17 && _0x5f1bx17['call'](_0x5f1bx5), this['completeChainedTweens'](), this) : this
        }, this['completeChainedTweens'] = function() {
            for (var a = 0, _0x5f1bx3 = _0x5f1bx11['length']; a < _0x5f1bx3; a++) {
                _0x5f1bx11[a]['complete']()
            }
        }, this['delay'] = function(a) {
            return _0x5f1bxe = a, this
        }, this['repeat'] = function(a) {
            return _0x5f1bxb = a, this
        }, this['yoyo'] = function(a) {
            return _0x5f1bxc = a, this
        }, this['easing'] = function(a) {
            return _0x5f1bxf = void(0) == a ? _0x5f1bxf : a, this
        }, this['interpolation'] = function(a) {
            return _0x5f1bx10 = a, this
        }, this['chain'] = function() {
            return _0x5f1bx11 = arguments, this
        }, this['onStart'] = function(a) {
            return _0x5f1bx12 = a, this
        }, this['onUpdate'] = function(a) {
            return _0x5f1bx15 = a, this
        }, this['onComplete'] = function(a) {
            return _0x5f1bx17 = a, this
        }, this['onStop'] = function(a) {
            return _0x5f1bx2b = a, this
        }, this['update'] = function(a) {
            var _0x5f1bx3, _0x5f1bxd, _0x5f1bx2b;
            if (a < _0x5f1bx6) {
                return !0
            };
            _0x5f1bx13 === !1 && (null !== _0x5f1bx12 && _0x5f1bx12['call'](_0x5f1bx5), _0x5f1bx13 = !0), _0x5f1bxd = (a - _0x5f1bx6) / _0x5f1bxa, _0x5f1bxd = _0x5f1bxd > 1 ? 1 : _0x5f1bxd, _0x5f1bx2b = _0x5f1bxf(_0x5f1bxd);
            for (_0x5f1bx3 in _0x5f1bx8) {
                if (void(0) !== _0x5f1bx7[_0x5f1bx3]) {
                    var _0x5f1bx18 = _0x5f1bx7[_0x5f1bx3] || 0,
                        _0x5f1bx16 = _0x5f1bx8[_0x5f1bx3];
                    _0x5f1bx16 instanceof Array ? _0x5f1bx5[_0x5f1bx3] = _0x5f1bx10(_0x5f1bx16, _0x5f1bx2b) : ('string' == typeof _0x5f1bx16 && (_0x5f1bx16 = _0x5f1bx16['startsWith']('+') || _0x5f1bx16['startsWith']('-') ? _0x5f1bx18 + parseFloat(_0x5f1bx16, 10) : parseFloat(_0x5f1bx16, 10)), 'number' == typeof _0x5f1bx16 && (_0x5f1bx5[_0x5f1bx3] = _0x5f1bx18 + (_0x5f1bx16 - _0x5f1bx18) * _0x5f1bx2b))
                }
            };
            if (null !== _0x5f1bx15 && _0x5f1bx15['call'](_0x5f1bx5, _0x5f1bx2b), 1 === _0x5f1bxd) {
                if (_0x5f1bxb > 0) {
                    isFinite(_0x5f1bxb) && _0x5f1bxb--;
                    for (_0x5f1bx3 in _0x5f1bx9) {
                        if ('string' == typeof _0x5f1bx8[_0x5f1bx3] && (_0x5f1bx9[_0x5f1bx3] = _0x5f1bx9[_0x5f1bx3] + parseFloat(_0x5f1bx8[_0x5f1bx3], 10)), _0x5f1bxc) {
                            var _0x5f1bx19 = _0x5f1bx9[_0x5f1bx3];
                            _0x5f1bx9[_0x5f1bx3] = _0x5f1bx8[_0x5f1bx3], _0x5f1bx8[_0x5f1bx3] = _0x5f1bx19
                        };
                        _0x5f1bx7[_0x5f1bx3] = _0x5f1bx9[_0x5f1bx3]
                    };
                    return _0x5f1bxc && (_0x5f1bx14 = !_0x5f1bx14), _0x5f1bx6 = a + _0x5f1bxe, !0
                };
                null !== _0x5f1bx17 && _0x5f1bx17['call'](_0x5f1bx5);
                for (var _0x5f1bx1a = 0, _0x5f1bx1b = _0x5f1bx11['length']; _0x5f1bx1a < _0x5f1bx1b; _0x5f1bx1a++) {
                    _0x5f1bx11[_0x5f1bx1a]['start'](_0x5f1bx6 + _0x5f1bxa)
                };
                return !1
            };
            return !0
        }
    }, _0x5f1bx3['Easing'] = {
        Linear: {
            None: function(a) {
                return a
            }
        },
        Quadratic: {
            In: function(a) {
                return a * a
            },
            Out: function(a) {
                return a * (2 - a)
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
            }
        },
        Quartic: {
            In: function(a) {
                return a * a * a * a
            },
            Out: function(a) {
                return 1 - --a * a * a * a
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
            }
        },
        Sinusoidal: {
            In: function(a) {
                return 1 - Math['cos'](a * Math['PI'] / 2)
            },
            Out: function(a) {
                return Math['sin'](a * Math['PI'] / 2)
            },
            InOut: function(a) {
                return 0.5 * (1 - Math['cos'](Math['PI'] * a))
            }
        },
        Cubic: {
            In: function(a) {
                return a * a * a
            },
            Out: function(a) {
                return --a * a * a + 1
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
            }
        }
    }, _0x5f1bx3['Interpolation'] = {
        Linear: function(a, _0x5f1bx5) {
            var _0x5f1bx7 = a['length'] - 1,
                _0x5f1bx8 = _0x5f1bx7 * _0x5f1bx5,
                _0x5f1bx9 = Math['floor'](_0x5f1bx8),
                _0x5f1bxa = _0x5f1bx3['Interpolation']['Utils']['Linear'];
            return _0x5f1bx5 < 0 ? _0x5f1bxa(a[0], a[1], _0x5f1bx8) : _0x5f1bx5 > 1 ? _0x5f1bxa(a[_0x5f1bx7], a[_0x5f1bx7 - 1], _0x5f1bx7 - _0x5f1bx8) : _0x5f1bxa(a[_0x5f1bx9], a[_0x5f1bx9 + 1 > _0x5f1bx7 ? _0x5f1bx7 : _0x5f1bx9 + 1], _0x5f1bx8 - _0x5f1bx9)
        },
        Bezier: function(a, _0x5f1bx5) {
            for (var _0x5f1bx7 = 0, _0x5f1bx8 = a['length'] - 1, _0x5f1bx9 = Math['pow'], _0x5f1bxa = _0x5f1bx3['Interpolation']['Utils']['Bernstein'], _0x5f1bxb = 0; _0x5f1bxb <= _0x5f1bx8; _0x5f1bxb++) {
                _0x5f1bx7 += _0x5f1bx9(1 - _0x5f1bx5, _0x5f1bx8 - _0x5f1bxb) * _0x5f1bx9(_0x5f1bx5, _0x5f1bxb) * a[_0x5f1bxb] * _0x5f1bxa(_0x5f1bx8, _0x5f1bxb)
            };
            return _0x5f1bx7
        },
        Utils: {
            Linear: function(a, _0x5f1bx3, _0x5f1bx5) {
                return (_0x5f1bx3 - a) * _0x5f1bx5 + a
            },
            Bernstein: function(a, _0x5f1bx5) {
                var _0x5f1bx7 = _0x5f1bx3['Interpolation']['Utils']['Factorial'];
                return _0x5f1bx7(a) / _0x5f1bx7(_0x5f1bx5) / _0x5f1bx7(a - _0x5f1bx5)
            },
            Factorial: function() {
                var a = [1];
                return function(_0x5f1bx3) {
                    var _0x5f1bx5 = 1;
                    if (a[_0x5f1bx3]) {
                        return a[_0x5f1bx3]
                    };
                    for (var _0x5f1bx7 = _0x5f1bx3; _0x5f1bx7 > 1; _0x5f1bx7--) {
                        _0x5f1bx5 *= _0x5f1bx7
                    };
                    return a[_0x5f1bx3] = _0x5f1bx5, _0x5f1bx5
                }
            }(),
            CatmullRom: function(a, _0x5f1bx3, _0x5f1bx5, _0x5f1bx7, _0x5f1bx8) {
                var _0x5f1bx9 = 0.5 * (_0x5f1bx5 - a),
                    _0x5f1bxa = 0.5 * (_0x5f1bx7 - _0x5f1bx3),
                    _0x5f1bxb = _0x5f1bx8 * _0x5f1bx8,
                    _0x5f1bxc = _0x5f1bx8 * _0x5f1bxb;
                return (2 * _0x5f1bx3 - 2 * _0x5f1bx5 + _0x5f1bx9 + _0x5f1bxa) * _0x5f1bxc + (-3 * _0x5f1bx3 + 3 * _0x5f1bx5 - 2 * _0x5f1bx9 - _0x5f1bxa) * _0x5f1bxb + _0x5f1bx9 * _0x5f1bx8 + _0x5f1bx3
            }
        }
    }, window['TWEEN'] = _0x5f1bx3
}(), PDFFlip['createBlob'] = function(_0x5f1bx3, _0x5f1bx5) {
    if ('undefined' != typeof Blob) {
        return new Blob([_0x5f1bx3], {
            type: _0x5f1bx5
        })
    };
    var _0x5f1bx7 = new MozBlobBuilder;
    return _0x5f1bx7['append'](_0x5f1bx3), _0x5f1bx7['getBlob'](_0x5f1bx5)
}, PDFFlip['createObjectURL'] = function() {
    var _0x5f1bx3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return function(_0x5f1bx5, _0x5f1bx7) {
        if ('undefined' != typeof URL && URL['createObjectURL']) {
            var _0x5f1bx8 = PDFFlip['createBlob'](_0x5f1bx5, _0x5f1bx7);
            return URL['createObjectURL'](_0x5f1bx8)
        };
        for (var _0x5f1bx9 = 'data:' + _0x5f1bx7 + ';base64,', _0x5f1bxa = 0, _0x5f1bxb = _0x5f1bx5['length']; _0x5f1bxa < _0x5f1bxb; _0x5f1bxa += 3) {
            var _0x5f1bxc = 255 & _0x5f1bx5[_0x5f1bxa],
                _0x5f1bxd = 255 & _0x5f1bx5[_0x5f1bxa + 1],
                _0x5f1bx14 = 255 & _0x5f1bx5[_0x5f1bxa + 2],
                _0x5f1bxe = _0x5f1bxc >> 2,
                _0x5f1bx6 = (3 & _0x5f1bxc) << 4 | _0x5f1bxd >> 4,
                _0x5f1bxf = _0x5f1bxa + 1 < _0x5f1bxb ? (15 & _0x5f1bxd) << 2 | _0x5f1bx14 >> 6 : 64,
                _0x5f1bx10 = _0x5f1bxa + 2 < _0x5f1bxb ? 63 & _0x5f1bx14 : 64;
            _0x5f1bx9 += _0x5f1bx3[_0x5f1bxe] + _0x5f1bx3[_0x5f1bx6] + _0x5f1bx3[_0x5f1bxf] + _0x5f1bx3[_0x5f1bx10]
        };
        return _0x5f1bx9
    }
}();
var ThumbList = function() {
        function _0x5f1bx3(a) {
            function _0x5f1bx14(a) {
                var _0x5f1bx3 = a['target']['scrollTop'];
                if (!_0x5f1bxa['lastRepaintY'] || Math['abs'](_0x5f1bx3 - _0x5f1bxa['lastRepaintY']) >= _0x5f1bxa['offsetItems'] * _0x5f1bxa['itemHeight']) {
                    var _0x5f1bx5 = parseInt(_0x5f1bx3 / _0x5f1bx8, 10) - _0x5f1bxa['offsetItems'];
                    _0x5f1bxa._renderChunk(_0x5f1bxa['container'], _0x5f1bx5 < 0 ? 0 : _0x5f1bx5), _0x5f1bxa['lastRepaintY'] = _0x5f1bx3
                };
                _0x5f1bxa['lastScrolled'] = _0x5f1bxc = Date['now'](), void(0) !== _0x5f1bxa['scrollFn'] && _0x5f1bxa['scrollFn'](), a['preventDefault'] && a['preventDefault']()
            }
            var _0x5f1bx5 = a && a['w'] + 'px' || '100%',
                _0x5f1bx7 = a && a['h'] + 'px' || '100%',
                _0x5f1bx8 = this['itemHeight'] = a['itemHeight'];
            this['items'] = a['items'], this['generatorFn'] = a['generatorFn'], this['totalRows'] = a['totalRows'] || a['items'] && a['items']['length'], this['addFn'] = a['addFn'], this['scrollFn'] = a['scrollFn'];
            var _0x5f1bx9 = _0x5f1bx3['createScroller'](_0x5f1bx8 * this['totalRows']);
            this['container'] = _0x5f1bx3['createContainer'](_0x5f1bx5, _0x5f1bx7), this['container']['appendChild'](_0x5f1bx9), this['screenItemsLen'] = Math['ceil'](a['h'] / _0x5f1bx8), this['offsetItems'] = this['screenItemsLen'], this['cachedItemsLen'] = this['screenItemsLen'] + 2 * this['offsetItems'], this._renderChunk(this['container'], 0);
            var _0x5f1bxa = this;
            _0x5f1bxa['lastRepaintY'] = 0;
            var _0x5f1bxc = (this['screenItemsLen'] * _0x5f1bx8, 0);
            _0x5f1bxa['dispose'] = function() {
                _0x5f1bxa['container'] && _0x5f1bxa['container']['parentNode'] && _0x5f1bxa['container']['parentNode']['removeChild'](_0x5f1bxa['container']), _0x5f1bxa['container']['removeEventListener']('scroll', _0x5f1bx14)
            }, _0x5f1bxa['container']['addEventListener']('scroll', _0x5f1bx14)
        }
        return _0x5f1bx3['prototype']['reset'] = function(a) {
            this['screenItemsLen'] = Math['ceil'](a / this['itemHeight']), this['cachedItemsLen'] = this['screenItemsLen'] + 2 * this['offsetItems'];
            var _0x5f1bx3 = parseInt(this['lastRepaintY'] / this['itemHeight'], 10) - this['offsetItems'];
            this['needReset'] = !0, this._renderChunk(this['container'], Math['max'](_0x5f1bx3, 0))
        }, _0x5f1bx3['prototype']['createRow'] = function(a) {
            var _0x5f1bx3;
            return this['generatorFn'] && (_0x5f1bx3 = this['generatorFn'](a), _0x5f1bx3['classList']['add']('PDFFlip-vrow'), _0x5f1bx3['style']['position'] = 'absolute', _0x5f1bx3['style']['top'] = a * this['itemHeight'] + 'px', _0x5f1bx3['setAttribute']('index', a)), _0x5f1bx3
        }, _0x5f1bx3['prototype']['_renderChunk'] = function(a, _0x5f1bx3) {
            var _0x5f1bx5 = void(0) == this['range'];
            this['range'] = this['range'] || {
                min: 0,
                max: this['cachedItemsLen']
            };
            var _0x5f1bx7 = this['range'],
                _0x5f1bx8 = _0x5f1bx7['min'],
                _0x5f1bx9 = _0x5f1bx7['max'],
                _0x5f1bxa = !!_0x5f1bx5 || _0x5f1bx3 >= _0x5f1bx8;
            if (_0x5f1bx5 || _0x5f1bx3 != _0x5f1bx8 || 0 != this['needReset']) {
                var _0x5f1bxb, _0x5f1bxc = _0x5f1bx5 ? _0x5f1bx8 : _0x5f1bxa ? _0x5f1bx9 : _0x5f1bx3;
                _0x5f1bxc = _0x5f1bxc > this['totalRows'] ? this['totalRows'] : _0x5f1bxc < 0 ? 0 : _0x5f1bxc;
                var _0x5f1bxd = _0x5f1bx3 + this['cachedItemsLen'];
                for (_0x5f1bxd = _0x5f1bxd > this['totalRows'] ? this['totalRows'] : _0x5f1bxd, _0x5f1bxb = _0x5f1bxc; _0x5f1bxb < _0x5f1bxd; _0x5f1bxb++) {
                    _0x5f1bxa ? a['appendChild'](this['createRow'](_0x5f1bxb)) : a['insertBefore'](this['createRow'](_0x5f1bxb), a['childNodes'][1 + _0x5f1bxb - _0x5f1bxc]), void(0) !== this['addFn'] && this['addFn'](_0x5f1bxb)
                };
                Math['abs'](_0x5f1bx3 - _0x5f1bx8);
                if (this['needReset'] = !1, !_0x5f1bx5 && a['childNodes']['length'] > this['cachedItemsLen'] + 1) {
                    for (var _0x5f1bxe = _0x5f1bxa ? 1 : 1 + this['cachedItemsLen'], _0x5f1bx6 = _0x5f1bxe + (_0x5f1bxd - _0x5f1bxc), _0x5f1bxf = _0x5f1bx6; _0x5f1bxf > _0x5f1bxe; _0x5f1bxf--) {
                        a['childNodes'][_0x5f1bxe] && this['container']['removeChild'](a['childNodes'][_0x5f1bxe])
                    }
                };
                this['range']['min'] = _0x5f1bx3, this['range']['max'] = _0x5f1bxd
            }
        }, _0x5f1bx3['createContainer'] = function(a, _0x5f1bx3) {
            var _0x5f1bx5 = document['createElement']('div');
            return _0x5f1bx5['style']['width'] = a, _0x5f1bx5['style']['height'] = _0x5f1bx3, _0x5f1bx5['style']['overflow'] = 'auto', _0x5f1bx5['style']['position'] = 'relative', _0x5f1bx5['style']['padding'] = 0, _0x5f1bx5
        }, _0x5f1bx3['createScroller'] = function(a) {
            var _0x5f1bx3 = document['createElement']('div');
            return _0x5f1bx3['style']['opacity'] = 0, _0x5f1bx3['style']['position'] = 'absolute', _0x5f1bx3['style']['top'] = 0, _0x5f1bx3['style']['left'] = 0, _0x5f1bx3['style']['width'] = '1px', _0x5f1bx3['style']['height'] = a + 'px', _0x5f1bx3
        }, _0x5f1bx3
    }(),
    BookMarkViewer = function() {
        function _0x5f1bx3(a) {
            this['outline'] = null, this['lastToggleIsShow'] = !0, this['container'] = a['container'], this['linkService'] = a['linkService'], this['outlineItemClass'] = a['outlineItemClass'] || 'outlineItem', this['outlineToggleClass'] = a['outlineToggleClass'] || 'outlineItemToggler', this['outlineToggleHiddenClass'] = a['outlineToggleHiddenClass'] || 'outlineItemsHidden'
        }
        return _0x5f1bx3['prototype'] = {
            dispose: function() {
                this['container'] && this['container']['parentNode'] && this['container']['parentNode']['removeChild'](this['container']), this['linkService'] = null
            },
            reset: function() {
                this['outline'] = null, this['lastToggleIsShow'] = !0;
                for (var _0x5f1bx3 = this['container']; _0x5f1bx3['firstChild'];) {
                    _0x5f1bx3['removeChild'](_0x5f1bx3['firstChild'])
                }
            },
            _dispatchEvent: function(_0x5f1bx3) {
                var _0x5f1bx5 = document['createEvent']('CustomEvent');
                _0x5f1bx5['initCustomEvent']('outlineloaded', !0, !0, {
                    outlineCount: _0x5f1bx3
                }), this['container']['dispatchEvent'](_0x5f1bx5)
            },
            _bindLink: function(_0x5f1bx3, _0x5f1bx5) {
                var _0x5f1bx7 = this['linkService'];
                if (1 == _0x5f1bx5['custom']) {
                    _0x5f1bx3['href'] = _0x5f1bx7['getCustomDestinationHash'](_0x5f1bx5['dest']), _0x5f1bx3['onclick'] = function(_0x5f1bx3) {
                        return _0x5f1bx7['customNavigateTo'](_0x5f1bx5['dest']), !1
                    }
                } else {
                    if (_0x5f1bx5['url']) {
                        return void(PDFJS)['addLinkAttributes'](_0x5f1bx3, {
                            url: _0x5f1bx5['url']
                        })
                    };
                    _0x5f1bx3['href'] = _0x5f1bx7['getDestinationHash'](_0x5f1bx5['dest']), _0x5f1bx3['onclick'] = function(_0x5f1bx3) {
                        return _0x5f1bx7['navigateTo'](_0x5f1bx5['dest']), !1
                    }
                }
            },
            _addToggleButton: function(_0x5f1bx3) {
                var _0x5f1bx5 = document['createElement']('div');
                _0x5f1bx5['className'] = this['outlineToggleClass'] + ' ' + this['outlineToggleHiddenClass'], _0x5f1bx5['onclick'] = function(a) {
                    if (a['stopPropagation'](), _0x5f1bx5['classList']['toggle'](this['outlineToggleHiddenClass']), a['shiftKey']) {
                        var _0x5f1bx7 = !_0x5f1bx5['classList']['contains'](this['outlineToggleHiddenClass']);
                        this._toggleOutlineItem(_0x5f1bx3, _0x5f1bx7)
                    }
                } ['bind'](this), _0x5f1bx3['insertBefore'](_0x5f1bx5, _0x5f1bx3['firstChild'])
            },
            _toggleOutlineItem: function(_0x5f1bx3, _0x5f1bx5) {
                this['lastToggleIsShow'] = _0x5f1bx5;
                for (var _0x5f1bx7 = _0x5f1bx3['querySelectorAll']('.' + this['outlineToggleClass']), _0x5f1bx8 = 0, _0x5f1bx9 = _0x5f1bx7['length']; _0x5f1bx8 < _0x5f1bx9; ++_0x5f1bx8) {
                    _0x5f1bx7[_0x5f1bx8]['classList'][_0x5f1bx5 ? 'remove' : 'add'](this['outlineToggleHiddenClass'])
                }
            },
            toggleOutlineTree: function() {
                this['outline'] && this._toggleOutlineItem(this['container'], !this['lastToggleIsShow'])
            },
            render: function(_0x5f1bx3) {
                var _0x5f1bx5 = _0x5f1bx3 && _0x5f1bx3['outline'] || null,
                    _0x5f1bx7 = 0;
                if (this['outline'] && this['reset'](), this['outline'] = _0x5f1bx5, _0x5f1bx5) {
                    for (var _0x5f1bx8 = document['createDocumentFragment'](), _0x5f1bx9 = [{
                            parent: _0x5f1bx8,
                            items: this['outline']
                        }], _0x5f1bxa = !1; _0x5f1bx9['length'] > 0;) {
                        for (var _0x5f1bxb = _0x5f1bx9['shift'](), _0x5f1bxc = _0x5f1bxb['custom'], _0x5f1bxd = 0, _0x5f1bx14 = _0x5f1bxb['items']['length']; _0x5f1bxd < _0x5f1bx14; _0x5f1bxd++) {
                            var _0x5f1bxe = _0x5f1bxb['items'][_0x5f1bxd],
                                _0x5f1bx6 = document['createElement']('div');
                            _0x5f1bx6['className'] = this['outlineItemClass'];
                            var _0x5f1bxf = document['createElement']('a');
                            if (void(0) == _0x5f1bxe['custom'] && void(0) !== _0x5f1bxc && (_0x5f1bxe['custom'] = _0x5f1bxc), this._bindLink(_0x5f1bxf, _0x5f1bxe), _0x5f1bxf['textContent'] = _0x5f1bxe['title']['replace'](/\x00/g, ''), _0x5f1bx6['appendChild'](_0x5f1bxf), _0x5f1bxe['items'] && _0x5f1bxe['items']['length'] > 0) {
                                _0x5f1bxa = !0, this._addToggleButton(_0x5f1bx6);
                                var _0x5f1bx10 = document['createElement']('div');
                                _0x5f1bx10['className'] = this['outlineItemClass'] + 's', _0x5f1bx6['appendChild'](_0x5f1bx10), _0x5f1bx9['push']({
                                    parent: _0x5f1bx10,
                                    custom: _0x5f1bxe['custom'],
                                    items: _0x5f1bxe['items']
                                })
                            };
                            _0x5f1bxb['parent']['appendChild'](_0x5f1bx6), _0x5f1bx7++
                        }
                    };
                    _0x5f1bxa && (void(0) != this['container']['classList'] ? this['container']['classList']['add'](this['outlineItemClass'] + 's') : void(0) != this['container']['className'] && (this['container']['className'] += ' picWindow')), this['container']['appendChild'](_0x5f1bx8), this._dispatchEvent(_0x5f1bx7)
                }
            }
        }, _0x5f1bx3
    }(),
    DFLightBox = function(_0x5f1bx3) {
        function _0x5f1bx5(a) {
            this['duration'] = 300;
            var _0x5f1bx5 = this;
            return _0x5f1bx5['lightboxWrapper'] = _0x5f1bx3('<div>')['addClass']('PDFFlip-lightbox-wrapper'), _0x5f1bx5['container'] = _0x5f1bx3('<div>')['addClass']('PDFFlip-holder')['appendTo'](_0x5f1bx5['lightboxWrapper']), _0x5f1bx5['controls'] = _0x5f1bx3('<div>')['addClass']('PDFFlip-lightbox-controls')['appendTo'](_0x5f1bx5['lightboxWrapper']), _0x5f1bx5['closeButton'] = _0x5f1bx3('<div>')['addClass']('PDFFlip-lightbox-close PDFFlip_XUI-btn fa fa-times-circle')['on']('click', function() {
                _0x5f1bx5['close'](a)
            })['appendTo'](_0x5f1bx5['controls']), _0x5f1bx5['lightboxWrapper']['append'](_0x5f1bx5['container']), _0x5f1bx5
        }
        return _0x5f1bx5['prototype']['show'] = function(a) {
            return 0 == this['lightboxWrapper']['parent']()['length'] && _0x5f1bx3('body')['append'](this['lightboxWrapper']), this['lightboxWrapper']['fadeIn'](this['duration'], a), this
        }, _0x5f1bx5['prototype']['close'] = function(a) {
            return this['lightboxWrapper']['fadeOut'](this['duration'], a), this
        }, _0x5f1bx5
    }(jQuery);
PDFFlip['Share'] = function(_0x5f1bx3) {
    function _0x5f1bx5(a, _0x5f1bx5) {
        var _0x5f1bx7 = this,
            _0x5f1bx8 = '<div>',
            _0x5f1bx9 = 'PDFFlip-share-button',
            _0x5f1bxa = 'width=500,height=400';
        _0x5f1bx7['isOpen'] = !1, _0x5f1bx7['shareUrl'] = '', _0x5f1bx7['wrapper'] = _0x5f1bx3('<div class="PDFFlip-share-wrapper" style="display: none;">')['on']('click', function(a) {
            _0x5f1bx7['close']()
        }), _0x5f1bx7['box'] = _0x5f1bx3('<div class="PDFFlip-share-box">')['on']('click', function(a) {
            a['preventDefault'](), a['stopPropagation']()
        })['appendTo'](_0x5f1bx7['wrapper'])['html']('<span class="PDFFlip-share-title">' + _0x5f1bx5['text']['share'] + '</span>'), _0x5f1bx7['urlInput'] = _0x5f1bx3('<textarea class="PDFFlip-share-url">')['on']('click', function() {
            _0x5f1bx3(this)['select']()
        }), _0x5f1bx7['facebook'] = _0x5f1bx3(_0x5f1bx8, {
            class: _0x5f1bx9 + ' PDFFlip-share-facebook ' + _0x5f1bx5['icons']['facebook']
        })['on']('click', function(a) {
            window['open']('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_0x5f1bx7['shareUrl']), 'Sharer', _0x5f1bxa)
        }), _0x5f1bx7['google'] = _0x5f1bx3(_0x5f1bx8, {
            class: _0x5f1bx9 + ' PDFFlip-share-google ' + _0x5f1bx5['icons']['google']
        })['on']('click', function(a) {
            window['open']('https://plus.google.com/share?url=' + encodeURIComponent(_0x5f1bx7['shareUrl']), 'Sharer', _0x5f1bxa)
        }), _0x5f1bx7['twitter'] = _0x5f1bx3(_0x5f1bx8, {
            class: _0x5f1bx9 + ' PDFFlip-share-twitter ' + _0x5f1bx5['icons']['twitter']
        })['on']('click', function(a) {
            window['open']('http://twitter.com/share?url=' + encodeURIComponent(_0x5f1bx7['shareUrl']), 'Sharer', _0x5f1bxa)
        }), _0x5f1bx7['box']['append'](_0x5f1bx7['urlInput'])['append'](_0x5f1bx7['facebook'])['append'](_0x5f1bx7['twitter']), _0x5f1bx3(a)['append'](_0x5f1bx7['wrapper'])
    }
    return _0x5f1bx5['prototype']['show'] = function() {
        this['wrapper']['fadeIn'](300), this['urlInput']['val'](this['shareUrl']), this['urlInput']['trigger']('click'), this['isOpen'] = !0
    }, _0x5f1bx5['prototype']['dispose'] = function() {
        var a = this;
        a['box']['off'](), a['google']['off'](), a['twitter']['off'](), a['facebook']['off'](), a['urlInput']['off'](), a['wrapper']['off']()['remove']()
    }, _0x5f1bx5['prototype']['close'] = function() {
        this['wrapper']['fadeOut'](300), this['isOpen'] = !1
    }, _0x5f1bx5['prototype']['update'] = function(a) {
        this['shareUrl'] = a
    }, _0x5f1bx5
}(jQuery);
var PDFLinkService = function() {
    function a() {
        this['baseUrl'] = null, this['pdfDocument'] = null, this['pdfViewer'] = null, this['pdfHistory'] = null, this['_pagesRefCache'] = null
    }
    return a['prototype'] = {
        dispose: function() {
            this['baseUrl'] = null, this['pdfDocument'] = null, this['pdfViewer'] = null, this['pdfHistory'] = null, this['_pagesRefCache'] = null
        },
        setDocument: function(_0x5f1bx3, _0x5f1bx5) {
            this['baseUrl'] = _0x5f1bx5, this['pdfDocument'] = _0x5f1bx3, this['_pagesRefCache'] = Object['create'](null)
        },
        setViewer: function(_0x5f1bx3) {
            this['pdfViewer'] = _0x5f1bx3
        },
        setHistory: function(_0x5f1bx3) {
            this['pdfHistory'] = _0x5f1bx3
        },
        get pagesCount() {
            return this['pdfDocument']['numPages']
        },
        get page() {
            return this['pdfViewer']['currentPageNumber']
        },
        set page(a) {
            this['pdfViewer']['currentPageNumber'] = a
        },
        navigateTo: function(_0x5f1bx3) {
            var _0x5f1bx9, _0x5f1bx5 = '',
                _0x5f1bx7 = this,
                _0x5f1bx8 = function(a) {
                    var _0x5f1bx9 = a instanceof Object ? _0x5f1bx7['_pagesRefCache'][a['num'] + ' ' + a['gen'] + ' R'] : a + 1;
                    _0x5f1bx9 ? (_0x5f1bx9 > _0x5f1bx7['pagesCount'] && (_0x5f1bx9 = _0x5f1bx7['pagesCount']), _0x5f1bx7['pdfViewer']['gotoPage'](_0x5f1bx9), _0x5f1bx7['pdfHistory'] && _0x5f1bx7['pdfHistory']['push']({
                        dest: _0x5f1bx3,
                        hash: _0x5f1bx5,
                        page: _0x5f1bx9
                    })) : _0x5f1bx7['pdfDocument']['getPageIndex'](a)['then'](function(_0x5f1bx3) {
                        var _0x5f1bx5 = _0x5f1bx3 + 1,
                            _0x5f1bx9 = a['num'] + ' ' + a['gen'] + ' R';
                        _0x5f1bx7['_pagesRefCache'][_0x5f1bx9] = _0x5f1bx5, _0x5f1bx8(a)
                    })
                };
            'string' == typeof _0x5f1bx3 ? (_0x5f1bx5 = _0x5f1bx3, _0x5f1bx9 = this['pdfDocument']['getDestination'](_0x5f1bx3)) : _0x5f1bx9 = Promise['resolve'](_0x5f1bx3), _0x5f1bx9['then'](function(a) {
                _0x5f1bx3 = a, a instanceof Array && _0x5f1bx8(a[0])
            })
        },
        customNavigateTo: function(_0x5f1bx3) {
            if ('' != _0x5f1bx3 && void(0) != _0x5f1bx3 && 'void 0' != _0x5f1bx3) {
                var _0x5f1bx5 = void(0);
                if (isNaN(Math['round'](_0x5f1bx3))) {
                    if ('string' == typeof _0x5f1bx3 && (_0x5f1bx5 = parseInt(_0x5f1bx3['replace']('#', ''), 10), isNaN(_0x5f1bx5))) {
                        return void(window)['open'](_0x5f1bx3)
                    }
                } else {
                    _0x5f1bx5 = _0x5f1bx3
                };
                void(0) !== _0x5f1bx5 && this['pdfViewer']['gotoPage'](_0x5f1bx5)
            }
        },
        getDestinationHash: function(_0x5f1bx3) {
            if ('string' == typeof _0x5f1bx3) {
                return this['getAnchorUrl']('#' + escape(_0x5f1bx3))
            };
            if (_0x5f1bx3 instanceof Array) {
                var _0x5f1bx5 = _0x5f1bx3[0],
                    _0x5f1bx7 = _0x5f1bx5 instanceof Object ? this['_pagesRefCache'][_0x5f1bx5['num'] + ' ' + _0x5f1bx5['gen'] + ' R'] : _0x5f1bx5 + 1;
                if (_0x5f1bx7) {
                    var _0x5f1bx8 = this['getAnchorUrl']('#page=' + _0x5f1bx7),
                        _0x5f1bx9 = _0x5f1bx3[1];
                    if ('object' == typeof _0x5f1bx9 && 'name' in _0x5f1bx9 && 'XYZ' === _0x5f1bx9['name']) {
                        var _0x5f1bxa = _0x5f1bx3[4] || this['pdfViewer']['currentScaleValue'],
                            _0x5f1bxb = parseFloat(_0x5f1bxa);
                        _0x5f1bxb && (_0x5f1bxa = 100 * _0x5f1bxb), _0x5f1bx8 += '&zoom=' + _0x5f1bxa, (_0x5f1bx3[2] || _0x5f1bx3[3]) && (_0x5f1bx8 += ',' + (_0x5f1bx3[2] || 0) + ',' + (_0x5f1bx3[3] || 0))
                    };
                    return _0x5f1bx8
                }
            };
            return this['getAnchorUrl']('')
        },
        getCustomDestinationHash: function(_0x5f1bx3) {
            return '#' + escape(_0x5f1bx3)
        },
        getAnchorUrl: function(_0x5f1bx3) {
            return (this['baseUrl'] || '') + _0x5f1bx3
        },
        setHash: function(_0x5f1bx3) {
            if (_0x5f1bx3['indexOf']('=') >= 0) {
                var _0x5f1bx5 = parseQueryString(_0x5f1bx3);
                if ('nameddest' in _0x5f1bx5) {
                    return this['pdfHistory'] && this['pdfHistory']['updateNextHashParam'](_0x5f1bx5['nameddest']), void(this)['navigateTo'](_0x5f1bx5['nameddest'])
                };
                var _0x5f1bx7, _0x5f1bx8;
                if ('page' in _0x5f1bx5 && (_0x5f1bx7 = 0 | _0x5f1bx5['page'] || 1), 'zoom' in _0x5f1bx5) {
                    var _0x5f1bx9 = _0x5f1bx5['zoom']['split'](','),
                        _0x5f1bxa = _0x5f1bx9[0],
                        _0x5f1bxb = parseFloat(_0x5f1bxa);
                    _0x5f1bxa['indexOf']('Fit') === -1 ? _0x5f1bx8 = [null, {
                        name: 'XYZ'
                    }, _0x5f1bx9['length'] > 1 ? 0 | _0x5f1bx9[1] : null, _0x5f1bx9['length'] > 2 ? 0 | _0x5f1bx9[2] : null, _0x5f1bxb ? _0x5f1bxb / 100 : _0x5f1bxa] : 'Fit' === _0x5f1bxa || 'FitB' === _0x5f1bxa ? _0x5f1bx8 = [null, {
                        name: _0x5f1bxa
                    }] : 'FitH' === _0x5f1bxa || 'FitBH' === _0x5f1bxa || 'FitV' === _0x5f1bxa || 'FitBV' === _0x5f1bxa ? _0x5f1bx8 = [null, {
                        name: _0x5f1bxa
                    }, _0x5f1bx9['length'] > 1 ? 0 | _0x5f1bx9[1] : null] : 'FitR' === _0x5f1bxa ? 5 !== _0x5f1bx9['length'] ? console['error']('PDFLinkService_setHash: Not enough parameters for \'FitR\'.') : _0x5f1bx8 = [null, {
                        name: _0x5f1bxa
                    }, 0 | _0x5f1bx9[1], 0 | _0x5f1bx9[2], 0 | _0x5f1bx9[3], 0 | _0x5f1bx9[4]] : console['error']('PDFLinkService_setHash: \'' + _0x5f1bxa + '\' is not a valid zoom value.')
                };
                if (_0x5f1bx8 ? this['pdfViewer']['scrollPageIntoView'](_0x5f1bx7 || this['page'], _0x5f1bx8) : _0x5f1bx7 && (this['page'] = _0x5f1bx7), 'pagemode' in _0x5f1bx5) {
                    var _0x5f1bxc = document['createEvent']('CustomEvent');
                    _0x5f1bxc['initCustomEvent']('pagemode', !0, !0, {
                        mode: _0x5f1bx5['pagemode']
                    }), this['pdfViewer']['container']['dispatchEvent'](_0x5f1bxc)
                }
            } else {
                /^\d+$/ ['test'](_0x5f1bx3) ? this['page'] = _0x5f1bx3: (this['pdfHistory'] && this['pdfHistory']['updateNextHashParam'](unescape(_0x5f1bx3)), this['navigateTo'](unescape(_0x5f1bx3)))
            }
        },
        executeNamedAction: function(_0x5f1bx3) {
            switch (_0x5f1bx3) {
                case 'GoBack':
                    this['pdfHistory'] && this['pdfHistory']['back']();
                    break;
                case 'GoForward':
                    this['pdfHistory'] && this['pdfHistory']['forward']();
                    break;
                case 'NextPage':
                    this['page']++;
                    break;
                case 'PrevPage':
                    this['page']--;
                    break;
                case 'LastPage':
                    this['page'] = this['pagesCount'];
                    break;
                case 'FirstPage':
                    this['page'] = 1
            };
            var _0x5f1bx5 = document['createEvent']('CustomEvent');
            _0x5f1bx5['initCustomEvent']('namedaction', !0, !0, {
                action: _0x5f1bx3
            }), this['pdfViewer']['container']['dispatchEvent'](_0x5f1bx5)
        },
        cachePageRef: function(_0x5f1bx3, _0x5f1bx5) {
            var _0x5f1bx7 = _0x5f1bx5['num'] + ' ' + _0x5f1bx5['gen'] + ' R';
            this['_pagesRefCache'][_0x5f1bx7] = _0x5f1bx3
        }
    }, a
}();
PDFFlip['TextLayerBuilder'] = function() {
        function _0x5f1bx3(a) {
            this['textLayerDiv'] = a['textLayerDiv'], this['renderingDone'] = !1, this['divContentDone'] = !1, this['pageIdx'] = a['pageIndex'], this['pageNumber'] = this['pageIdx'] + 1, this['matches'] = [], this['viewport'] = a['viewport'], this['textDivs'] = [], this['findController'] = a['findController'] || null, this['textLayerRenderTask'] = null, this['enhanceTextSelection'] = a['enhanceTextSelection'], this._bindMouse()
        }
        return _0x5f1bx3['prototype'] = {
            _finishRendering: function() {
                if (this['renderingDone'] = !0, !this['enhanceTextSelection']) {
                    var _0x5f1bx3 = document['createElement']('div');
                    _0x5f1bx3['className'] = 'endOfContent', this['textLayerDiv']['appendChild'](_0x5f1bx3)
                }
            },
            render: function(_0x5f1bx3) {
                if (this['divContentDone'] && !this['renderingDone']) {
                    this['textLayerRenderTask'] && (this['textLayerRenderTask']['cancel'](), this['textLayerRenderTask'] = null), this['textDivs'] = [];
                    var _0x5f1bx5 = document['createDocumentFragment']();
                    this['textLayerRenderTask'] = PDFJS['renderTextLayer']({
                        textContent: this['textContent'],
                        container: _0x5f1bx5,
                        viewport: this['viewport'],
                        textDivs: this['textDivs'],
                        timeout: _0x5f1bx3,
                        enhanceTextSelection: this['enhanceTextSelection']
                    }), this['textLayerRenderTask']['promise']['then'](function() {
                        this['textLayerDiv']['appendChild'](_0x5f1bx5), this._finishRendering(), this['updateMatches']()
                    } ['bind'](this), function(a) {})
                }
            },
            setTextContent: function(_0x5f1bx3) {
                this['textLayerRenderTask'] && (this['textLayerRenderTask']['cancel'](), this['textLayerRenderTask'] = null), this['textContent'] = _0x5f1bx3, this['divContentDone'] = !0
            },
            convertMatches: function(_0x5f1bx3, _0x5f1bx5) {
                var _0x5f1bx7 = 0,
                    _0x5f1bx8 = 0,
                    _0x5f1bx9 = this['textContent']['items'],
                    _0x5f1bxa = _0x5f1bx9['length'] - 1,
                    _0x5f1bxb = null === this['findController'] ? 0 : this['findController']['state']['query']['length'],
                    _0x5f1bxc = [];
                if (!_0x5f1bx3) {
                    return _0x5f1bxc
                };
                for (var _0x5f1bxd = 0, _0x5f1bx14 = _0x5f1bx3['length']; _0x5f1bxd < _0x5f1bx14; _0x5f1bxd++) {
                    for (var _0x5f1bxe = _0x5f1bx3[_0x5f1bxd]; _0x5f1bx7 !== _0x5f1bxa && _0x5f1bxe >= _0x5f1bx8 + _0x5f1bx9[_0x5f1bx7]['str']['length'];) {
                        _0x5f1bx8 += _0x5f1bx9[_0x5f1bx7]['str']['length'], _0x5f1bx7++
                    };
                    _0x5f1bx7 === _0x5f1bx9['length'] && console['error']('Could not find a matching mapping');
                    var _0x5f1bx6 = {
                        begin: {
                            divIdx: _0x5f1bx7,
                            offset: _0x5f1bxe - _0x5f1bx8
                        }
                    };
                    for (_0x5f1bxe += _0x5f1bx5 ? _0x5f1bx5[_0x5f1bxd] : _0x5f1bxb; _0x5f1bx7 !== _0x5f1bxa && _0x5f1bxe > _0x5f1bx8 + _0x5f1bx9[_0x5f1bx7]['str']['length'];) {
                        _0x5f1bx8 += _0x5f1bx9[_0x5f1bx7]['str']['length'], _0x5f1bx7++
                    };
                    _0x5f1bx6['end'] = {
                        divIdx: _0x5f1bx7,
                        offset: _0x5f1bxe - _0x5f1bx8
                    }, _0x5f1bxc['push'](_0x5f1bx6)
                };
                return _0x5f1bxc
            },
            renderMatches: function(_0x5f1bx3) {
                function _0x5f1bx14(a, _0x5f1bx3) {
                    var _0x5f1bx5 = a['divIdx'];
                    _0x5f1bx7[_0x5f1bx5]['textContent'] = '', _0x5f1bxe(_0x5f1bx5, 0, a['offset'], _0x5f1bx3)
                }

                function _0x5f1bxe(a, _0x5f1bx3, _0x5f1bx8, _0x5f1bx9) {
                    var _0x5f1bxa = _0x5f1bx7[a],
                        _0x5f1bxb = _0x5f1bx5[a]['str']['substring'](_0x5f1bx3, _0x5f1bx8),
                        _0x5f1bxc = document['createTextNode'](_0x5f1bxb);
                    if (_0x5f1bx9) {
                        var _0x5f1bxd = document['createElement']('span');
                        return _0x5f1bxd['className'] = _0x5f1bx9, _0x5f1bxd['appendChild'](_0x5f1bxc), void(_0x5f1bxa)['appendChild'](_0x5f1bxd)
                    };
                    _0x5f1bxa['appendChild'](_0x5f1bxc)
                }
                if (0 !== _0x5f1bx3['length']) {
                    var _0x5f1bx5 = this['textContent']['items'],
                        _0x5f1bx7 = this['textDivs'],
                        _0x5f1bx8 = null,
                        _0x5f1bx9 = this['pageIdx'],
                        _0x5f1bxa = null !== this['findController'] && _0x5f1bx9 === this['findController']['selected']['pageIdx'],
                        _0x5f1bxb = null === this['findController'] ? -1 : this['findController']['selected']['matchIdx'],
                        _0x5f1bxc = null !== this['findController'] && this['findController']['state']['highlightAll'],
                        _0x5f1bxd = {
                            divIdx: -1,
                            offset: void(0)
                        },
                        _0x5f1bx6 = _0x5f1bxb,
                        _0x5f1bxf = _0x5f1bx6 + 1;
                    if (_0x5f1bxc) {
                        _0x5f1bx6 = 0, _0x5f1bxf = _0x5f1bx3['length']
                    } else {
                        if (!_0x5f1bxa) {
                            return
                        }
                    };
                    for (var _0x5f1bx10 = _0x5f1bx6; _0x5f1bx10 < _0x5f1bxf; _0x5f1bx10++) {
                        var _0x5f1bx11 = _0x5f1bx3[_0x5f1bx10],
                            _0x5f1bx12 = _0x5f1bx11['begin'],
                            _0x5f1bx13 = _0x5f1bx11['end'],
                            _0x5f1bx15 = _0x5f1bxa && _0x5f1bx10 === _0x5f1bxb,
                            _0x5f1bx17 = _0x5f1bx15 ? ' selected' : '';
                        if (this['findController'] && this['findController']['updateMatchPosition'](_0x5f1bx9, _0x5f1bx10, _0x5f1bx7, _0x5f1bx12['divIdx']), _0x5f1bx8 && _0x5f1bx12['divIdx'] === _0x5f1bx8['divIdx'] ? _0x5f1bxe(_0x5f1bx8['divIdx'], _0x5f1bx8['offset'], _0x5f1bx12['offset']) : (null !== _0x5f1bx8 && _0x5f1bxe(_0x5f1bx8['divIdx'], _0x5f1bx8['offset'], _0x5f1bxd['offset']), _0x5f1bx14(_0x5f1bx12)), _0x5f1bx12['divIdx'] === _0x5f1bx13['divIdx']) {
                            _0x5f1bxe(_0x5f1bx12['divIdx'], _0x5f1bx12['offset'], _0x5f1bx13['offset'], 'highlight' + _0x5f1bx17)
                        } else {
                            _0x5f1bxe(_0x5f1bx12['divIdx'], _0x5f1bx12['offset'], _0x5f1bxd['offset'], 'highlight begin' + _0x5f1bx17);
                            for (var _0x5f1bx2b = _0x5f1bx12['divIdx'] + 1, _0x5f1bx18 = _0x5f1bx13['divIdx']; _0x5f1bx2b < _0x5f1bx18; _0x5f1bx2b++) {
                                _0x5f1bx7[_0x5f1bx2b]['className'] = 'highlight middle' + _0x5f1bx17
                            };
                            _0x5f1bx14(_0x5f1bx13, 'highlight end' + _0x5f1bx17)
                        };
                        _0x5f1bx8 = _0x5f1bx13
                    };
                    _0x5f1bx8 && _0x5f1bxe(_0x5f1bx8['divIdx'], _0x5f1bx8['offset'], _0x5f1bxd['offset'])
                }
            },
            updateMatches: function() {
                if (this['renderingDone']) {
                    for (var _0x5f1bx3 = this['matches'], _0x5f1bx5 = this['textDivs'], _0x5f1bx7 = this['textContent']['items'], _0x5f1bx8 = -1, _0x5f1bx9 = 0, _0x5f1bxa = _0x5f1bx3['length']; _0x5f1bx9 < _0x5f1bxa; _0x5f1bx9++) {
                        for (var _0x5f1bxb = _0x5f1bx3[_0x5f1bx9], _0x5f1bxc = Math['max'](_0x5f1bx8, _0x5f1bxb['begin']['divIdx']), _0x5f1bxd = _0x5f1bxc, _0x5f1bx14 = _0x5f1bxb['end']['divIdx']; _0x5f1bxd <= _0x5f1bx14; _0x5f1bxd++) {
                            var _0x5f1bxe = _0x5f1bx5[_0x5f1bxd];
                            _0x5f1bxe['textContent'] = _0x5f1bx7[_0x5f1bxd]['str'], _0x5f1bxe['className'] = ''
                        };
                        _0x5f1bx8 = _0x5f1bxb['end']['divIdx'] + 1
                    };
                    if (null !== this['findController'] && this['findController']['active']) {
                        var _0x5f1bx6, _0x5f1bxf;
                        null !== this['findController'] && (_0x5f1bx6 = this['findController']['pageMatches'][this['pageIdx']] || null, _0x5f1bxf = this['findController']['pageMatchesLength'] ? this['findController']['pageMatchesLength'][this['pageIdx']] || null : null), this['matches'] = this['convertMatches'](_0x5f1bx6, _0x5f1bxf), this['renderMatches'](this['matches'])
                    }
                }
            },
            _bindMouse: function() {
                var _0x5f1bx3 = this['textLayerDiv'],
                    _0x5f1bx5 = this;
                _0x5f1bx3['addEventListener']('mousedown', function(a) {
                    if (_0x5f1bx5['enhanceTextSelection'] && _0x5f1bx5['textLayerRenderTask']) {
                        return void(_0x5f1bx5)['textLayerRenderTask']['expandTextDivs'](!0)
                    };
                    var _0x5f1bx7 = _0x5f1bx3['querySelector']('.endOfContent');
                    if (_0x5f1bx7) {
                        var _0x5f1bx8 = a['target'] !== _0x5f1bx3;
                        if (_0x5f1bx8 = _0x5f1bx8 && 'none' !== window['getComputedStyle'](_0x5f1bx7)['getPropertyValue']('-moz-user-select')) {
                            var _0x5f1bx9 = _0x5f1bx3['getBoundingClientRect'](),
                                _0x5f1bxa = Math['max'](0, (a['pageY'] - _0x5f1bx9['top']) / _0x5f1bx9['height']);
                            _0x5f1bx7['style']['top'] = (100 * _0x5f1bxa)['toFixed'](2) + '%'
                        };
                        _0x5f1bx7['classList']['add']('active')
                    }
                }), _0x5f1bx3['addEventListener']('mouseup', function(a) {
                    if (_0x5f1bx5['enhanceTextSelection'] && _0x5f1bx5['textLayerRenderTask']) {
                        return void(_0x5f1bx5)['textLayerRenderTask']['expandTextDivs'](!1)
                    };
                    var _0x5f1bx7 = _0x5f1bx3['querySelector']('.endOfContent');
                    _0x5f1bx7 && (_0x5f1bx7['style']['top'] = '', _0x5f1bx7['classList']['remove']('active'))
                })
            }
        }, _0x5f1bx3
    }(), PDFFlip['ConvertPageLinks'] = function() {
        for (var _0x5f1bx8, a = arguments[0] / 100, _0x5f1bx3 = arguments[1] / 100, _0x5f1bx5 = function(_0x5f1bx5, _0x5f1bx7, _0x5f1bx8, _0x5f1bx9, _0x5f1bxa) {
                return {
                    x: _0x5f1bx5 / a,
                    y: _0x5f1bx7 / _0x5f1bx3,
                    w: _0x5f1bx8 / a,
                    h: _0x5f1bx9 / _0x5f1bx3,
                    dest: _0x5f1bxa
                }
            }, _0x5f1bx7 = [], _0x5f1bx9 = 2; _0x5f1bx9 < arguments['length']; _0x5f1bx9++) {
            _0x5f1bx8 = arguments[_0x5f1bx9], _0x5f1bx7[_0x5f1bx9 - 2] = _0x5f1bx5['apply'](this, _0x5f1bx8)
        };
        return _0x5f1bx7
    }, PDFFlip['parseLinks'] = function(a) {
        var _0x5f1bx3;
        if (void(0) !== a && a['length'] > 0) {
            for (var _0x5f1bx5 = 0; _0x5f1bx5 < a['length']; _0x5f1bx5++) {
                _0x5f1bx3 = a[_0x5f1bx5], void(0) !== _0x5f1bx3 && void(0) !== _0x5f1bx3[0] && void(0) == _0x5f1bx3[0]['dest'] && (_0x5f1bx3 = PDFFlip['ConvertPageLinks']['apply'](this, _0x5f1bx3), a[_0x5f1bx5] = _0x5f1bx3)
            }
        };
        return a
    },
    function(a) {
        function _0x5f1bx3(a) {
            return 'true' == a
        }

        function _0x5f1bx5(a) {
            void(0) !== a['webgl'] && (a['webgl'] = _0x5f1bx3(a['webgl'])), void(0) !== a['Allow_PDF_Download'] && (a['Allow_PDF_Download'] = _0x5f1bx3(a.Allow_PDF_Download)), void(0) !== a['scrollWheel'] && (a['scrollWheel'] = _0x5f1bx3(a['scrollWheel'])), void(0) !== a['Open_Table_of_Contents_on_Start'] && (a['Open_Table_of_Contents_on_Start'] = _0x5f1bx3(a.Open_Table_of_Contents_on_Start)), void(0) !== a['transparent'] && (a['transparent'] = _0x5f1bx3(a['transparent'])), void(0) !== a['overwritePDFOutline'] && (a['overwritePDFOutline'] = _0x5f1bx3(a['overwritePDFOutline'])), void(0) !== a['Page_Flip_Sound_Enable'] && (a['Page_Flip_Sound_Enable'] = _0x5f1bx3(a.Page_Flip_Sound_Enable)), void(0) !== a['minTopOffset'] && (a['minTopOffset'] = parseInt(a['minTopOffset'], 10)), 0 != a['pageMode'] && '0' != a['pageMode'] || (a['pageMode'] = void(0))
        }

        function _0x5f1bx7(a) {
            if (1 != a['parsed']) {
                a['parsed'] = !0;
                var _0x5f1bx3 = [];
                if (_0x5f1bx5(a), 'undefined' != typeof PDFFlipWPGlobal && 'true' == a['wpOptions']) {
                    try {
                        for (var _0x5f1bx7 in a['links']) {
                            for (var _0x5f1bx8 = a['links'][_0x5f1bx7], _0x5f1bx9 = [100, 100], _0x5f1bxa = 0; _0x5f1bxa < _0x5f1bx8['length']; _0x5f1bxa++) {
                                for (var _0x5f1bxb = _0x5f1bx8[_0x5f1bxa], _0x5f1bxc = _0x5f1bxb['replace']('[', '')['replace'](']', '')['split'](','), _0x5f1bxd = [], _0x5f1bx14 = 0; _0x5f1bx14 < 5; _0x5f1bx14++) {
                                    _0x5f1bxd[_0x5f1bx14] = _0x5f1bxc[_0x5f1bx14]
                                };
                                _0x5f1bx9['push'](_0x5f1bxd)
                            };
                            _0x5f1bx3[parseInt(_0x5f1bx7, 10) + 1] = _0x5f1bx9
                        }
                    } catch (a) {
                        console['error'](a['stack'])
                    };
                    a['links'] = PDFFlip['parseLinks'](_0x5f1bx3)
                } else {
                    a['links'] = PDFFlip['parseLinks'](a['links'])
                }
            }
        }
        PDFFlip['getOptions'] = function(_0x5f1bx3) {
            _0x5f1bx3 = a(_0x5f1bx3);
            var _0x5f1bx5 = _0x5f1bx3['attr']('id'),
                _0x5f1bx8 = 'option_' + _0x5f1bx5,
                _0x5f1bx9 = _0x5f1bx3['attr']('source') || _0x5f1bx3['attr']('PDFFlip-source');
            _0x5f1bx8 = void(0) == _0x5f1bx8 || '' == _0x5f1bx8 || void(0) == window[_0x5f1bx8] ? {} : window[_0x5f1bx8], _0x5f1bx8['source'] = void(0) == _0x5f1bx9 || '' == _0x5f1bx9 ? _0x5f1bx8['source'] : _0x5f1bx9;
            var _0x5f1bxa = {
                webgl: _0x5f1bx3['attr']('webgl'),
                height: _0x5f1bx3['attr']('height'),
                Page_Flip_Sound_Enable: _0x5f1bx3['attr']('sound'),
                transparent: _0x5f1bx3['attr']('transparent'),
                Allow_PDF_Download: _0x5f1bx3['attr']('download'),
                duration: _0x5f1bx3['attr']('duration'),
                hard: _0x5f1bx3['attr']('hard'),
                pageMode: _0x5f1bx3['attr']('pagemode'),
                Flip_Direction: _0x5f1bx3['attr']('Flip_Direction'),
                Main_Background_Color: _0x5f1bx3['attr']('backgroundColor'),
                scrollWheel: _0x5f1bx3['attr']('scrollwheel'),
                Main_Background_Image: _0x5f1bx3['attr']('backgroundimage'),
                minTopOffset: _0x5f1bx3['attr']('mintopoffset'),
                wpOptions: _0x5f1bx3['attr']('wpoptions')
            };
            return _0x5f1bx8 = a['extend'](!0, {}, _0x5f1bx8, _0x5f1bxa), _0x5f1bx7(_0x5f1bx8), _0x5f1bx8
        }, PDFFlip['parseBooks'] = function() {
            a('.PFlip_button, .PFlip_thb, .PFlip_custom, .PDFFlip')['each'](function() {
                var _0x5f1bx3 = a(this),
                    _0x5f1bx5 = _0x5f1bx3['attr']('parsed') || _0x5f1bx3['attr']('PDFFlip-parsed');
                if ('true' !== _0x5f1bx5) {
                    if (_0x5f1bx3['attr']('PDFFlip-parsed', 'true'), _0x5f1bx3['hasClass']('PDFFlip')) {
                        var _0x5f1bx7 = _0x5f1bx3['attr']('id'),
                            _0x5f1bx8 = PDFFlip['getOptions'](_0x5f1bx3);
                        _0x5f1bx8['id'] = _0x5f1bx7, window[_0x5f1bx7.toString()] = a(_0x5f1bx3)['flipBook'](_0x5f1bx8['source'], _0x5f1bx8)
                    } else {
                        if (_0x5f1bx3['on']('click', function() {
                                var _0x5f1bx3 = a(this);
                                window['dfLightBox'] || (window['dfLightBox'] = new DFLightBox(function() {
                                    window['location']['hash'] = '', window['dfActiveLightBoxBook']['dispose'](), window['dfActiveLightBoxBook'] = null
                                })), window['dfLightBox']['duration'] = 500, window['dfActiveLightBoxBook'] && window['dfActiveLightBoxBook']['dispose'] ? window['dfActiveLightBoxBook']['dispose']() : window['dfLightBox']['show'](function() {
                                    var _0x5f1bx5 = PDFFlip['getOptions'](_0x5f1bx3);
                                    _0x5f1bx5['transparent'] = !1, _0x5f1bx5['id'] = _0x5f1bx3['attr']('id'), _0x5f1bx5['isLightBox'] = !0, window['dfActiveLightBoxBook'] = a(window['dfLightBox']['container'])['flipBook'](_0x5f1bx5['source'], _0x5f1bx5)
                                })
                            }), _0x5f1bx3['hasClass']('PFlip_thb')) {
                            var _0x5f1bx9 = a('<div class=\'PFlip_book-cover\'>'),
                                _0x5f1bxa = _0x5f1bx3['html']();
                            _0x5f1bx3['html']('');
                            var _0x5f1bxc = (a('<span class=\'PFlip_book-title\'>')['html'](_0x5f1bxa)['appendTo'](_0x5f1bx9), _0x5f1bx3['attr']('thumb') || _0x5f1bx3['attr']('PDFFlip-thumb')),
                                _0x5f1bxd = _0x5f1bx3['attr']('tags') || _0x5f1bx3['attr']('PDFFlip-tags');
                            if (_0x5f1bxd && (_0x5f1bxd = _0x5f1bxd['split'](','), _0x5f1bxd['length'] > 0)) {
                                for (var _0x5f1bx14 = 0; _0x5f1bx14 < _0x5f1bxd['length']; _0x5f1bx14++) {
                                    _0x5f1bx3['append']('<span class=\'PFlip_book-tag\'>' + _0x5f1bxd[_0x5f1bx14] + '</span>')
                                }
                            };
                            void(0) !== _0x5f1bxc && '' != _0x5f1bxc.toString()['trim']() ? _0x5f1bx9['css']({
                                backgroundImage: 'url(' + _0x5f1bxc + ')'
                            }) : _0x5f1bx9['addClass']('PFlip_thb-not-found'), _0x5f1bx3['append'](_0x5f1bx9)
                        }
                    }
                }
            })
        }, a(document)['ready'](function() {
            if ('undefined' != typeof PDFFlipLocation && (PDFFlipLocation['length'] > 2 && '/' !== PDFFlipLocation['slice'](-1) && (PDFFlipLocation += '/'), PDFFlip['defaults']['pdfjsSrc'] = PDFFlipLocation + 'js/libs/pdf.min.js', PDFFlip['defaults']['pdfjsCompatibilitySrc'] = PDFFlipLocation + 'js/libs/compatibility.js', PDFFlip['defaults']['pdfjsWorkerSrc'] = PDFFlipLocation + 'js/libs/pdf.worker.min.js', PDFFlip['defaults']['soundFile'] = PDFFlipLocation + 'sound/turn2.mp3', 'undefined' != typeof PDFFlipWPGlobal && (_0x5f1bx5(PDFFlipWPGlobal), a['extend'](PDFFlip['defaults'], PDFFlipWPGlobal))), PDFFlip['preParseHash'] = window['location']['hash'], PDFFlip['parseBooks'](), PDFFlip['preParseHash'] && PDFFlip['preParseHash']['indexOf']('PDFFlip-') >= 0) {
                var _0x5f1bx3 = PDFFlip['preParseHash']['split']('PDFFlip-')[1]['split']('/')[0],
                    _0x5f1bx7 = PDFFlip['preParseHash']['split']('PDFFlip-')[1]['split']('/')[1];
                void(0) != _0x5f1bx7 && (_0x5f1bx7 = _0x5f1bx7['split']('/')[0]);
                var _0x5f1bx8 = a('#' + _0x5f1bx3);
                if (_0x5f1bx8['length'] > 0) {
                    window['location']['hash'];
                    window['location']['hash'] = _0x5f1bx3, window['location']['hash'] = PDFFlip['preParseHash'], void(0) != _0x5f1bx7 && _0x5f1bx8['data']('page', _0x5f1bx7), _0x5f1bx8['is']('.PFlip_button, .PFlip_thb, .PFlip_custom') && _0x5f1bx8['trigger']('click')
                }
            }
        })
    }(jQuery)