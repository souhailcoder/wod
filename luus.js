$(document)['ready'](function() {
	if ($('#blogID')['attr']('blogID') != '2406146568926136424') {
		if ($('#blogID')['attr']('blogID') != '6750858760650866228') {
          		if ($('#blogID')['attr']('blogID') != '405424164964734040') {
			window['location']['href'] = 'https://fb.com/taaalam'
		}
	}
});
! function(_0xd1cbx1, _0xd1cbx2, _0xd1cbx3) {
	var _0xd1cbx4 = {
			label: '',
			duplicate: !0,
			duration: 200,
			easingOpen: 'swing',
			easingClose: 'swing',
			closedSymbol: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
			openedSymbol: '<i class="fa fa-chevron-down" aria-hidden="true"></i>',
			prependTo: 'body',
			parentTag: 'a',
			closeOnClick: !1,
			allowParentLinks: !1,
			nestedParentLinks: !0,
			showChildren: !1,
			removeIds: !1,
			removeClasses: !1,
			removeStyles: !1,
			brand: '',
			init: function() {},
			beforeOpen: function() {},
			beforeClose: function() {},
			afterOpen: function() {},
			afterClose: function() {}
		},
		_0xd1cbx5 = 'slicknav',
		_0xd1cbx6 = 'slicknav';

	function _0xd1cbx7(_0xd1cbx3, _0xd1cbx8) {
		this['element'] = _0xd1cbx3, this['settings'] = _0xd1cbx1['extend']({}, _0xd1cbx4, _0xd1cbx8), this['_defaults'] = _0xd1cbx4, this['_name'] = _0xd1cbx5, this['init']()
	}
	_0xd1cbx7['prototype']['init'] = function() {
		var _0xd1cbx3, _0xd1cbx8, _0xd1cbx9 = this,
			_0xd1cbx4 = _0xd1cbx1(this['element']),
			_0xd1cbxa = this['settings'];
		if (_0xd1cbxa['duplicate'] ? (_0xd1cbx9['mobileNav'] = _0xd1cbx4['clone'](), _0xd1cbx9['mobileNav']['removeAttr']('id'), _0xd1cbx9['mobileNav']['find']('*')['each'](function(_0xd1cbx3, _0xd1cbx8) {
				_0xd1cbx1(_0xd1cbx8)['removeAttr']('id')
			})) : (_0xd1cbx9['mobileNav'] = _0xd1cbx4, _0xd1cbx9['mobileNav']['removeAttr']('id'), _0xd1cbx9['mobileNav']['find']('*')['each'](function(_0xd1cbx3, _0xd1cbx8) {
				_0xd1cbx1(_0xd1cbx8)['removeAttr']('id')
			})), _0xd1cbxa['removeClasses'] && (_0xd1cbx9['mobileNav']['removeAttr']('class'), _0xd1cbx9['mobileNav']['find']('*')['each'](function(_0xd1cbx3, _0xd1cbx8) {
				_0xd1cbx1(_0xd1cbx8)['removeAttr']('class')
			})), _0xd1cbxa['removeStyles'] && (_0xd1cbx9['mobileNav']['removeAttr']('style'), _0xd1cbx9['mobileNav']['find']('*')['each'](function(_0xd1cbx3, _0xd1cbx8) {
				_0xd1cbx1(_0xd1cbx8)['removeAttr']('style')
			})), _0xd1cbx3 = _0xd1cbx6 + '_icon', '' === _0xd1cbxa['label'] && (_0xd1cbx3 += ' ' + _0xd1cbx6 + '_no-text'), 'a' == _0xd1cbxa['parentTag'] && (_0xd1cbxa['parentTag'] = 'a href="#"'), _0xd1cbx9['mobileNav']['attr']('class', _0xd1cbx6 + '_nav'), _0xd1cbx8 = _0xd1cbx1('<div class="' + _0xd1cbx6 + '_menu"></div>'), '' !== _0xd1cbxa['brand']) {
			var _0xd1cbxb = _0xd1cbx1('<div class="' + _0xd1cbx6 + '_brand">' + _0xd1cbxa['brand'] + '</div>');
			_0xd1cbx1(_0xd1cbx8)['append'](_0xd1cbxb)
		};
		_0xd1cbx9['btn'] = _0xd1cbx1(['<' + _0xd1cbxa['parentTag'] + ' aria-haspopup="true" tabindex="0" class="' + _0xd1cbx6 + '_btn ' + _0xd1cbx6 + '_collapsed">', '<span class="' + _0xd1cbx6 + '_menutxt">' + _0xd1cbxa['label'] + '</span>', '<span class="' + _0xd1cbx3 + '">', '<span class="' + _0xd1cbx6 + '_icon-bar"></span>', '<span class="' + _0xd1cbx6 + '_icon-bar"></span>', '<span class="' + _0xd1cbx6 + '_icon-bar"></span>', '</span>', '</' + _0xd1cbxa['parentTag'] + '>']['join']('')), _0xd1cbx1(_0xd1cbx8)['append'](_0xd1cbx9['btn']), _0xd1cbx1(_0xd1cbxa['prependTo'])['prepend'](_0xd1cbx8), _0xd1cbx8['append'](_0xd1cbx9['mobileNav']);
		var _0xd1cbx5 = _0xd1cbx9['mobileNav']['find']('li');
		_0xd1cbx1(_0xd1cbx5)['each'](function() {
			var _0xd1cbx3 = _0xd1cbx1(this),
				_0xd1cbx8 = {};
			if (_0xd1cbx8['children'] = _0xd1cbx3['children']('ul')['attr']('role', 'menu'), _0xd1cbx3['data']('menu', _0xd1cbx8), 0 < _0xd1cbx8['children']['length']) {
				var _0xd1cbx4 = _0xd1cbx3['contents'](),
					_0xd1cbxb = !1,
					_0xd1cbx5 = [];
				_0xd1cbx1(_0xd1cbx4)['each'](function() {
					if (_0xd1cbx1(this)['is']('ul')) {
						return !1
					};
					_0xd1cbx5['push'](this), _0xd1cbx1(this)['is']('a') && (_0xd1cbxb = !0)
				});
				var _0xd1cbx2 = _0xd1cbx1('<' + _0xd1cbxa['parentTag'] + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + _0xd1cbx6 + '_item"/>');
				if (_0xd1cbxa['allowParentLinks'] && !_0xd1cbxa['nestedParentLinks'] && _0xd1cbxb) {
					_0xd1cbx1(_0xd1cbx5)['wrapAll']('<span class="' + _0xd1cbx6 + '_parent-link ' + _0xd1cbx6 + '_row"/>')['parent']()
				} else {
					_0xd1cbx1(_0xd1cbx5)['wrapAll'](_0xd1cbx2)['parent']()['addClass'](_0xd1cbx6 + '_row')
				};
				_0xd1cbxa['showChildren'] ? _0xd1cbx3['addClass'](_0xd1cbx6 + '_open') : _0xd1cbx3['addClass'](_0xd1cbx6 + '_collapsed'), _0xd1cbx3['addClass'](_0xd1cbx6 + '_parent');
				var _0xd1cbx7 = _0xd1cbx1('<span class="' + _0xd1cbx6 + '_arrow">' + (_0xd1cbxa['showChildren'] ? _0xd1cbxa['openedSymbol'] : _0xd1cbxa['closedSymbol']) + '</span>');
				_0xd1cbxa['allowParentLinks'] && !_0xd1cbxa['nestedParentLinks'] && _0xd1cbxb && (_0xd1cbx7 = _0xd1cbx7['wrap'](_0xd1cbx2)['parent']()), _0xd1cbx1(_0xd1cbx5)['last']()['after'](_0xd1cbx7)
			} else {
				0 === _0xd1cbx3['children']()['length'] && _0xd1cbx3['addClass'](_0xd1cbx6 + '_txtnode')
			};
			_0xd1cbx3['children']('a')['attr']('role', 'menuitem')['click'](function(_0xd1cbx3) {
				_0xd1cbxa['closeOnClick'] && !_0xd1cbx1(_0xd1cbx3['target'])['parent']()['closest']('li')['hasClass'](_0xd1cbx6 + '_parent') && _0xd1cbx1(_0xd1cbx9['btn'])['click']()
			}), _0xd1cbxa['closeOnClick'] && _0xd1cbxa['allowParentLinks'] && (_0xd1cbx3['children']('a')['children']('a')['click'](function(_0xd1cbx3) {
				_0xd1cbx1(_0xd1cbx9['btn'])['click']()
			}), _0xd1cbx3['find']('.' + _0xd1cbx6 + '_parent-link a:not(.' + _0xd1cbx6 + '_item)')['click'](function(_0xd1cbx3) {
				_0xd1cbx1(_0xd1cbx9['btn'])['click']()
			}))
		}), _0xd1cbx1(_0xd1cbx5)['each'](function() {
			var _0xd1cbx3 = _0xd1cbx1(this)['data']('menu');
			_0xd1cbxa['showChildren'] || _0xd1cbx9._visibilityToggle(_0xd1cbx3['children'], null, !1, null, !0)
		}), _0xd1cbx9._visibilityToggle(_0xd1cbx9['mobileNav'], null, !1, 'init', !0), _0xd1cbx9['mobileNav']['attr']('role', 'menu'), _0xd1cbx1(_0xd1cbx2)['mousedown'](function() {
			_0xd1cbx9._outlines(!1)
		}), _0xd1cbx1(_0xd1cbx2)['keyup'](function() {
			_0xd1cbx9._outlines(!0)
		}), _0xd1cbx1(_0xd1cbx9['btn'])['click'](function(_0xd1cbx3) {
			_0xd1cbx3['preventDefault'](), _0xd1cbx9._menuToggle()
		}), _0xd1cbx9['mobileNav']['on']('click', '.' + _0xd1cbx6 + '_item', function(_0xd1cbx3) {
			_0xd1cbx3['preventDefault'](), _0xd1cbx9._itemClick(_0xd1cbx1(this))
		}), _0xd1cbx1(_0xd1cbx9['btn'])['keydown'](function(_0xd1cbx3) {
			13 == (_0xd1cbx3 || event)['keyCode'] && (_0xd1cbx3['preventDefault'](), _0xd1cbx9._menuToggle())
		}), _0xd1cbx9['mobileNav']['on']('keydown', '.' + _0xd1cbx6 + '_item', function(_0xd1cbx3) {
			13 == (_0xd1cbx3 || event)['keyCode'] && (_0xd1cbx3['preventDefault'](), _0xd1cbx9._itemClick(_0xd1cbx1(_0xd1cbx3['target'])))
		}), _0xd1cbxa['allowParentLinks'] && _0xd1cbxa['nestedParentLinks'] && _0xd1cbx1('.' + _0xd1cbx6 + '_item a')['click'](function(_0xd1cbx3) {
			_0xd1cbx3['stopImmediatePropagation']()
		})
	}, _0xd1cbx7['prototype']['_menuToggle'] = function(_0xd1cbx3) {
		var _0xd1cbx8 = this,
			_0xd1cbx4 = _0xd1cbx8['btn'],
			_0xd1cbxb = _0xd1cbx8['mobileNav'];
		_0xd1cbx4['hasClass'](_0xd1cbx6 + '_collapsed') ? (_0xd1cbx4['removeClass'](_0xd1cbx6 + '_collapsed'), _0xd1cbx4['addClass'](_0xd1cbx6 + '_open')) : (_0xd1cbx4['removeClass'](_0xd1cbx6 + '_open'), _0xd1cbx4['addClass'](_0xd1cbx6 + '_collapsed')), _0xd1cbx4['addClass'](_0xd1cbx6 + '_animating'), _0xd1cbx8._visibilityToggle(_0xd1cbxb, _0xd1cbx4['parent'](), !0, _0xd1cbx4)
	}, _0xd1cbx1('.open-mobile-menu')['click'](function() {
		_0xd1cbx1('.menu-container')['css']('right', '0px'), _0xd1cbx1('body')['addClass']('stop-m'), _0xd1cbx1('.mobil-m-overlay')['removeClass']('hide')
	}), _0xd1cbx1('.menu-close-icon')['click'](function() {
		_0xd1cbx1('.menu-container')['css']('right', '-284px'), _0xd1cbx1('body')['removeClass']('stop-m'), _0xd1cbx1('.mobil-m-overlay')['addClass']('hide')
	}), _0xd1cbx1('.mobil-m-overlay')['click'](function() {
		_0xd1cbx1(this)['addClass']('hide'), _0xd1cbx1('body')['removeClass']('stop-m'), _0xd1cbx1('.menu-container')['css']('right', '-284px')
	}), _0xd1cbx7['prototype']['_itemClick'] = function(_0xd1cbx3) {
		var _0xd1cbx8 = this,
			_0xd1cbx4 = _0xd1cbx8['settings'],
			_0xd1cbxb = _0xd1cbx3['data']('menu');
		_0xd1cbxb || ((_0xd1cbxb = {})['arrow'] = _0xd1cbx3['children']('.' + _0xd1cbx6 + '_arrow'), _0xd1cbxb['ul'] = _0xd1cbx3['next']('ul'), _0xd1cbxb['parent'] = _0xd1cbx3['parent'](), _0xd1cbxb['parent']['hasClass'](_0xd1cbx6 + '_parent-link') && (_0xd1cbxb['parent'] = _0xd1cbx3['parent']()['parent'](), _0xd1cbxb['ul'] = _0xd1cbx3['parent']()['next']('ul')), _0xd1cbx3['data']('menu', _0xd1cbxb)), _0xd1cbxb['parent']['hasClass'](_0xd1cbx6 + '_collapsed') ? (_0xd1cbxb['arrow']['html'](_0xd1cbx4['openedSymbol']), _0xd1cbxb['parent']['removeClass'](_0xd1cbx6 + '_collapsed'), _0xd1cbxb['parent']['addClass'](_0xd1cbx6 + '_open')) : (_0xd1cbxb['arrow']['html'](_0xd1cbx4['closedSymbol']), _0xd1cbxb['parent']['addClass'](_0xd1cbx6 + '_collapsed'), _0xd1cbxb['parent']['removeClass'](_0xd1cbx6 + '_open')), _0xd1cbxb['parent']['addClass'](_0xd1cbx6 + '_animating'), _0xd1cbx8._visibilityToggle(_0xd1cbxb['ul'], _0xd1cbxb['parent'], !0, _0xd1cbx3)
	}, _0xd1cbx7['prototype']['_visibilityToggle'] = function(_0xd1cbx3, _0xd1cbx8, _0xd1cbx4, _0xd1cbxb, _0xd1cbx5) {
		var _0xd1cbx2 = this,
			_0xd1cbx7 = _0xd1cbx2['settings'],
			_0xd1cbx9 = _0xd1cbx2._getActionItems(_0xd1cbx3),
			_0xd1cbxa = 0;
		_0xd1cbx4 && (_0xd1cbxa = _0xd1cbx7['duration']), _0xd1cbx3['hasClass'](_0xd1cbx6 + '_hidden') ? (_0xd1cbx3['removeClass'](_0xd1cbx6 + '_hidden'), _0xd1cbx5 || _0xd1cbx7['beforeOpen'](_0xd1cbxb), _0xd1cbx3['slideDown'](_0xd1cbxa, _0xd1cbx7['easingOpen'], function() {
			_0xd1cbx1(_0xd1cbxb)['removeClass'](_0xd1cbx6 + '_animating'), _0xd1cbx1(_0xd1cbx8)['removeClass'](_0xd1cbx6 + '_animating'), _0xd1cbx5 || _0xd1cbx7['afterOpen'](_0xd1cbxb)
		}), _0xd1cbx3['attr']('aria-hidden', 'false'), _0xd1cbx9['attr']('tabindex', '0'), _0xd1cbx2._setVisAttr(_0xd1cbx3, !1)) : (_0xd1cbx3['addClass'](_0xd1cbx6 + '_hidden'), _0xd1cbx5 ? 'init' == _0xd1cbxb && _0xd1cbx7['init']() : _0xd1cbx7['beforeClose'](_0xd1cbxb), _0xd1cbx3['slideUp'](_0xd1cbxa, this['settings']['easingClose'], function() {
			_0xd1cbx3['attr']('aria-hidden', 'true'), _0xd1cbx9['attr']('tabindex', '-1'), _0xd1cbx2._setVisAttr(_0xd1cbx3, !0), _0xd1cbx3['hide'](), _0xd1cbx1(_0xd1cbxb)['removeClass'](_0xd1cbx6 + '_animating'), _0xd1cbx1(_0xd1cbx8)['removeClass'](_0xd1cbx6 + '_animating'), _0xd1cbx5 ? 'init' == _0xd1cbxb && _0xd1cbx7['init']() : _0xd1cbx7['afterClose'](_0xd1cbxb)
		}))
	}, _0xd1cbx7['prototype']['_setVisAttr'] = function(_0xd1cbx3, _0xd1cbx8) {
		var _0xd1cbx4 = this,
			_0xd1cbxb = _0xd1cbx3['children']('li')['children']('ul')['not']('.' + _0xd1cbx6 + '_hidden');
		_0xd1cbx8 ? _0xd1cbxb['each'](function() {
			var _0xd1cbx3 = _0xd1cbx1(this);
			_0xd1cbx3['attr']('aria-hidden', 'true'), _0xd1cbx4._getActionItems(_0xd1cbx3)['attr']('tabindex', '-1'), _0xd1cbx4._setVisAttr(_0xd1cbx3, _0xd1cbx8)
		}) : _0xd1cbxb['each'](function() {
			var _0xd1cbx3 = _0xd1cbx1(this);
			_0xd1cbx3['attr']('aria-hidden', 'false'), _0xd1cbx4._getActionItems(_0xd1cbx3)['attr']('tabindex', '0'), _0xd1cbx4._setVisAttr(_0xd1cbx3, _0xd1cbx8)
		})
	}, _0xd1cbx7['prototype']['_getActionItems'] = function(_0xd1cbx3) {
		var _0xd1cbx8 = _0xd1cbx3['data']('menu');
		if (!_0xd1cbx8) {
			_0xd1cbx8 = {};
			var _0xd1cbx4 = _0xd1cbx3['children']('li'),
				_0xd1cbxb = _0xd1cbx4['find']('a');
			_0xd1cbx8['links'] = _0xd1cbxb['add'](_0xd1cbx4['find']('.' + _0xd1cbx6 + '_item')), _0xd1cbx3['data']('menu', _0xd1cbx8)
		};
		return _0xd1cbx8['links']
	}, _0xd1cbx7['prototype']['_outlines'] = function(_0xd1cbx3) {
		_0xd1cbx3 ? _0xd1cbx1('.' + _0xd1cbx6 + '_item, .' + _0xd1cbx6 + '_btn')['css']('outline', '') : _0xd1cbx1('.' + _0xd1cbx6 + '_item, .' + _0xd1cbx6 + '_btn')['css']('outline', 'none')
	}, _0xd1cbx7['prototype']['toggle'] = function() {
		this._menuToggle()
	}, _0xd1cbx7['prototype']['open'] = function() {
		this['btn']['hasClass'](_0xd1cbx6 + '_collapsed') && this._menuToggle()
	}, _0xd1cbx7['prototype']['close'] = function() {
		this['btn']['hasClass'](_0xd1cbx6 + '_open') && this._menuToggle()
	}, _0xd1cbx1['fn'][_0xd1cbx5] = function(_0xd1cbx8) {
		var _0xd1cbx4, _0xd1cbxb = arguments;
		return void(0) === _0xd1cbx8 || 'object' == typeof _0xd1cbx8 ? this['each'](function() {
			_0xd1cbx1['data'](this, 'plugin_' + _0xd1cbx5) || _0xd1cbx1['data'](this, 'plugin_' + _0xd1cbx5, new _0xd1cbx7(this, _0xd1cbx8))
		}) : 'string' == typeof _0xd1cbx8 && '_' !== _0xd1cbx8[0] && 'init' !== _0xd1cbx8 ? (this['each'](function() {
			var _0xd1cbx3 = _0xd1cbx1['data'](this, 'plugin_' + _0xd1cbx5);
			_0xd1cbx3 instanceof _0xd1cbx7 && 'function' == typeof _0xd1cbx3[_0xd1cbx8] && (_0xd1cbx4 = _0xd1cbx3[_0xd1cbx8]['apply'](_0xd1cbx3, Array['prototype']['slice']['call'](_0xd1cbxb, 1)))
		}), void(0) !== _0xd1cbx4 ? _0xd1cbx4 : this) : void(0)
	}
}(jQuery, document, window), $(document)['ready'](function() {
	new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		loop: !0,
		speed: 1e3,
		effect: 'slide',
		slidesPerView: sliderNum,
		paginationClickable: !0,
		spaceBetween: 10,
		centeredSlides: !1,
		autoplay: 3e3,
		autoplayDisableOnInteraction: !1,
		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	})
}), $(document)['ready'](function() {
	new Swiper('.swiper-container-2', {
		nextButton: '.swiper-button-next-f',
		prevButton: '.swiper-button-prev-f',
		loop: !0,
		speed: 1e3,
		effect: 'slide',
		slidesPerView: 4,
		spaceBetween: 10,
		autoplay: 2800,
		autoplayDisableOnInteraction: !1,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	})
}), $(function() {
	$('#nav2')['slicknav']({
		prependTo: '.get-menu'
	}), $('.menu')['slicknav']('open')
}), $(function() {
	$('#nav1')['slicknav']({
		prependTo: '#top-menu'
	})
})
