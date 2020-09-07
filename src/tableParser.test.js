const { getNumericDataListFrom } = require("./tableParser");
const { JSDOM } = require("jsdom");

describe(`Function: ${getNumericDataListFrom.name}`, () => {
  it("returns empty array if there is no data", () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <table class="wikitable sortable jquery-tablesorter">
        <thead>
        <tr>
          <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Height</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `);

    const result = getNumericDataListFrom(dom);

    expect(result).toHaveLength(0);
  });
  it("returns the first column of numeric data", () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <table class="wikitable sortable jquery-tablesorter">
        <thead>
        <tr>
          <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Height</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.46&nbsp;m (4&nbsp;ft <span class="frac nowrap">9<span class="visualhide">&nbsp;</span><sup>1</sup>⁄<sub>2</sub></span>&nbsp;in)
            </td>
            <td><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" decoding="async" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" width="23" height="12">&nbsp;</span><a href="/wiki/Nancy_Voorhees" title="Nancy Voorhees">Nancy Voorhees</a>&nbsp;<span style="font-size:90%;">(<abbr title="United States">USA</abbr>)</span>
            </td>
            <td>20 May 1922
            </td>
            <td><a href="/wiki/Simsbury" class="mw-redirect" title="Simsbury">Simsbury</a><sup id="cite_ref-iaaf_1-1" class="reference"><a href="#cite_note-iaaf-1">[1]</a></sup>
            </td>
          </tr>
          <tr bgcolor="">
            <td>1.485&nbsp;m (4&nbsp;ft <span class="frac nowrap">10<span class="visualhide">&nbsp;</span><sup>1</sup>⁄<sub>2</sub></span>&nbsp;in)
            </td>
            <td><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" decoding="async" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" width="23" height="12">&nbsp;</span><a href="/w/index.php?title=Elizabeth_Stine&amp;action=edit&amp;redlink=1" class="new" title="Elizabeth Stine (page does not exist)">Elizabeth Stine</a>&nbsp;<span style="font-size:90%;">(<abbr title="United States">USA</abbr>)</span>
            </td>
            <td>26 May 1923
            </td>
            <td><a href="/wiki/Leonia" class="mw-redirect" title="Leonia">Leonia</a><sup id="cite_ref-iaaf_1-2" class="reference"><a href="#cite_note-iaaf-1">[1]</a></sup>
            </td>
          </tr>
  
          <tr>
            <td>1.485&nbsp;m (4&nbsp;ft <span class="frac nowrap">10<span class="visualhide">&nbsp;</span><sup>1</sup>⁄<sub>2</sub></span>&nbsp;in)
            </td>
            <td><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png" decoding="async" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/35px-Flag_of_the_United_Kingdom.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/46px-Flag_of_the_United_Kingdom.svg.png 2x" data-file-width="1200" data-file-height="600" width="23" height="12">&nbsp;</span><a href="/wiki/Mary,_Lady_Heath" title="Mary, Lady Heath">Sophie Eliott-Lynn</a>&nbsp;<span style="font-size:90%;">(<abbr title="Great Britain">GBR</abbr>)</span>
            </td>
            <td>6 August 1923
            </td>
            <td><a href="/wiki/Brentwood,_Essex" title="Brentwood, Essex">Brentwood</a><sup id="cite_ref-iaaf_1-3" class="reference"><a href="#cite_note-iaaf-1">[1]</a></sup>
            </td>
          </tr>
        </tbody>
      </table>
    `);

    const result = getNumericDataListFrom(dom);

    expect(result).toHaveLength(3);
  });
});
