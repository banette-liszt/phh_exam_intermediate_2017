'use strict';
// world データベースを使って以下のプログラムを完成させなさい
//
// (以下は world データベースがない場合)
// world データベースは以下からダウンロード出来る
// https://dev.mysql.com/doc/index-other.html
// DBMS へのデータの取り込みは例えば次のようになる。
// $ mysql -uroot -p < ~/Downloads/world.sql

const mysql = require ('promise-mysql');

const DB_NAME = 'world';
const DB_USERNAME = '';
const DB_PASSWD = '';

// country テーブルに登録されているレコード数を返す
function countCountry () {
}

// countrylanguage テーブルから引数で指定された言語を使用しているレコードの CountryCode を返す
function findCountryCodeFromLanguage (lang) {
  // 例えば lang に 'Japanese' を指定した場合は以下のレコードが取得出来れば良い
  // +-------------+----------+------------+------------+
  // | CountryCode | Language | IsOfficial | Percentage |
  // +-------------+----------+------------+------------+
  // | BRA         | Japanese | F          |        0.4 |
  // | GUM         | Japanese | F          |        2.0 |
  // | JPN         | Japanese | T          |       99.1 |
  // | USA         | Japanese | F          |        0.2 |
  // +-------------+----------+------------+------------+  
  // ここから CountryCode のみを配列にして返す
}

// CountryCode(国コード)の配列から国名の配列を取得して返す
function getCountryNamesByCountryCodes (codes) {
}

// 英語を使っている国名の配列を返す
function getUseEnglishCountryNames () {
}

// 各関数の実行と出力をする
console.log (countCountry ());
let codes = findCountryCodeFromLanguage ('Japanese');
console.log (codes);
console.log (getCountryNamesByCountryCodes (codes));
console.log (getUseEnglishCountryNames ());
