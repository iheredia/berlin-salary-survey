import { useContext } from "react";
import AppContext from "@/components/context";
import classNames from "classnames";
import styles from "./ampel-chart.module.css";
import { range } from "lodash";
import { UserComparisonData } from "@/data/types";

function Ampelmann(props: { fill: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="5 5 50 55">
      <g transform="translate(-31.695223,-363.36299)">
        <path
          d="m 76.955483,421.86019 c -0.42555,-0.2948 -0.15817,-1.61146 0.90098,-4.43661 0.28685,-0.76515 0.5611,-1.56144 0.60944,-1.76953 l 0.0879,-0.37835 -0.5144,-0.4924 c -0.62389,-0.59722 -1.66438,-1.43688 -4.096689,-3.30596 -2.836222,-2.17948 -5.542618,-4.38439 -6.988911,-5.69391 -0.70307,-0.63658 -0.974677,-0.80015 -1.162093,-0.69985 -0.255066,0.13651 -2.082648,2.03307 -4.932158,5.11831 -5.32521,5.76574 -8.473447,9.0929 -8.942311,9.45052 l -0.241426,0.18415 -0.256841,-0.17107 c -1.384601,-0.92217 -6.809922,-5.82852 -8.195733,-7.41174 -0.516918,-0.59056 -0.929885,-1.29602 -0.929885,-1.5885 0,-0.0895 0.06652,-0.22932 0.147829,-0.31063 0.130198,-0.13019 0.198647,-0.1426 0.573864,-0.10403 0.497505,0.0511 1.806758,0.38894 3.268139,0.8432 1.321734,0.41086 1.589637,0.44402 2.026359,0.25083 0.494777,-0.21886 0.982643,-0.76022 3.877381,-4.30258 4.645463,-5.68476 4.783383,-5.87619 4.783383,-6.63947 0,-0.53416 -0.1285,-0.76967 -0.524557,-0.9614 -0.428554,-0.20746 -0.722526,-0.16684 -1.72288,0.23801 -0.441878,0.17883 -0.973236,0.36077 -1.180792,0.40431 -0.338774,0.0711 -0.421245,0.0627 -0.80625,-0.0812 -0.235879,-0.0882 -1.109029,-0.56652 -1.940334,-1.0629 -0.831301,-0.49638 -2.387904,-1.40429 -3.459115,-2.01757 -2.888037,-1.65344 -3.101415,-1.80534 -3.201251,-2.2788 -0.09853,-0.46729 -0.561169,-0.98404 -2.085234,-2.3291 -2.593995,-2.28933 -3.104842,-3.04734 -2.681754,-3.97924 0.292825,-0.64499 1.353773,-1.87352 1.826885,-2.11545 0.331602,-0.16958 0.904435,-0.17007 1.272224,-10e-4 0.434962,0.19984 1.102787,0.73522 2.050167,1.64357 1.606341,1.54016 2.07291,1.87556 3.236319,2.32646 0.420831,0.16311 1.485085,0.60157 2.365006,0.97436 0.879921,0.3728 1.740715,0.72885 1.912876,0.79123 0.568726,0.20609 1.542407,0.46336 1.753633,0.46336 0.561491,0 1.146189,-0.54555 2.324973,-2.16929 0.812883,-1.11972 1.144861,-1.53376 2.123891,-2.64889 0.607486,-0.69194 1.101199,-1.41253 1.101199,-1.60724 0,-0.23528 -0.275176,-0.58449 -0.663894,-0.8425 -0.36362,-0.24136 -0.628086,-0.36198 -1.377173,-0.62813 -0.463663,-0.16473 -1.274702,-0.72016 -1.672354,-1.14528 -0.181903,-0.19447 -0.413721,-0.53257 -0.515155,-0.75133 -0.265614,-0.57286 -0.260711,-1.48179 0.01577,-2.92251 l 0.204189,-1.06403 -0.71755,-0.72 -0.717552,-0.72 0.235125,-0.21538 c 0.283488,-0.25967 0.997951,-0.63356 1.210682,-0.63356 0.328918,0 0.707223,-0.40391 1.270419,-1.3564 0.735537,-1.24396 0.827074,-1.43837 0.709542,-1.50701 -1.856897,-1.08434 -3.682629,-2.40934 -3.741569,-2.71539 -0.03422,-0.17769 0.256186,-0.39351 0.598591,-0.44486 0.746126,-0.11189 1.89083,0.0677 3.674416,0.5766 l 1.12195,0.32009 0.474522,-0.5145 c 1.123448,-1.21808 1.599096,-1.59266 2.022418,-1.59266 0.104645,0 1.459685,0.59103 3.011199,1.3134 1.551515,0.72237 3.90084,1.80818 5.220724,2.41291 1.319881,0.60472 2.412203,1.10862 2.427381,1.11977 0.02136,0.0157 -0.163821,2.38846 -0.223941,2.86924 -0.008,0.0642 0.74144,0.47659 2.149191,1.1825 2.761605,1.3848 3.392915,1.83207 3.094115,2.1921 -0.24274,0.29249 -2.30336,0.31318 -4.096787,0.0412 -1.060474,-0.16086 -1.707807,-0.17765 -1.958778,-0.0508 -0.513916,0.25972 -3.27885,4.35565 -3.386007,5.01598 -0.04227,0.26047 0.296813,1.05265 1.699946,3.97154 1.146343,2.38471 1.760636,3.83201 2.332363,5.49517 0.249879,0.72689 0.554422,1.58164 0.676764,1.89945 0.582983,1.51441 2.387439,3.65474 7.928289,9.404 4.99807,5.18609 5.92574,6.19588 6.16643,6.71235 0.18912,0.40582 0.20957,0.85559 0.0538,1.18381 -0.62666,1.32059 -6.62776,6.93836 -8.33709,7.80454 -0.36056,0.18271 -1.11127,0.2881 -1.26981,0.17827 z"
          style={{ fill: props.fill }}
        />
      </g>
    </svg>
  );
}

function Ampelfrau(props: { fill: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="5 5 50 55">
      <g transform="translate(-31.695223,-363.36299)">
        <path
          d="m 73.425558,423.52789 c -0.23699,-0.40471 -0.0919,-0.5864 0.60625,-1.62241 0.49508,-0.73466 1.42786,-2.17155 2.16167,-2.93534 0.2904,-0.30227 0.50054,-0.69866 0.4531,-0.87316 -0.1124,-0.41336 -2.60931,-3.24804 -3.04206,-3.60365 l -2.01371,-2.02678 -0.83459,0.17591 c -0.45903,0.0968 -2.76861,0.16072 -3.77314,0.17135 -1.10917,0.0118 -2.64781,-0.23287 -2.93354,-0.23287 -0.51406,0 -0.6567,-0.0527 -1.53009,0.93093 -0.48545,0.54676 -4.37589,6.03753 -4.55378,6.33586 -0.49885,0.8366 -0.80052,1.07928 -1.53123,0.99512 -0.96548,-0.11119 -1.53376,-0.3887 -1.69555,-0.42834 -0.25903,-0.0635 -2.46933,-1.14729 -3.02312,-1.45698 -1.13507,-0.63474 -3.65768,-1.66638 -3.43815,-2.4077 0.16455,-0.55565 1.41176,-0.39586 2.23435,-0.38347 0.83688,0.0126 3.05163,0.29842 3.74303,-0.57023 0.18151,-0.22804 0.49826,-0.35901 1.14818,-1.83785 0.33542,-0.76323 0.65951,-1.42178 0.72019,-1.46346 0.0607,-0.0417 0.24743,-0.38278 0.41497,-0.75801 0.22555,-0.50513 0.2729,-0.71061 0.18243,-0.79156 -0.0672,-0.0601 -0.55234,-0.34824 -1.07806,-0.64025 -1.94618,-1.081 -4.79385,-2.9302 -4.93324,-3.46795 -0.16681,-0.64357 0.32374,-1.14155 2.01604,-2.71929 1.6923,-1.57774 4.81934,-4.37183 4.81934,-4.37183 0,0 0.20959,-0.32212 -1.63007,-1.46155 -1.18018,-0.6509 -4.20693,-2.50782 -5.60682,-3.25935 -1.35197,-0.7258 -2.79876,-1.48565 -4.39741,-2.58559 -0.36095,-0.24836 -0.42303,-0.30856 -0.30506,-0.89598 l 0.0345,-0.50667 -0.46965,-0.0634 c -3.3799,-1.52489 -3.42723,-2.7509 -3.48315,-3.29971 -0.039,-0.3827 -0.35147,-2.5087 0.77445,-3.51482 1.12593,-1.00613 2.83144,-0.52301 3.67278,-0.10389 0.77924,0.38819 1.72529,1.7043 1.90282,2.12003 0.17236,0.40359 0.43357,0.5102 0.65291,0.26647 0.2074,-0.23046 0.34233,-0.0483 1.1161,0.42694 2.0658,1.2689 6.40253,3.81953 7.53855,3.4673 0.65897,-0.13046 2.15963,-3.31501 2.76787,-5.5053 0.17462,-0.6288 0.16925,-0.83018 -0.65865,-1.08451 -1.32556,-0.40722 -1.73402,-0.83783 -2.5809,-2.70887 -0.27629,-0.61039 -0.43114,-1.29214 -0.43114,-1.84267 0,-0.78426 0.15348,-1.11699 0.3131,-1.45392 0.15307,-0.3231 0.31291,-0.60378 0.31266,-0.65066 -1.3e-4,-0.0469 -0.1131,-0.33198 -0.25081,-0.63355 -0.30365,-0.66503 -0.43768,-1.59808 -0.27735,-1.93096 0.13646,-0.28331 0.83443,-0.40922 1.25316,-0.42141 0.76142,-0.0221 2.41335,-0.69551 2.07082,-1.46668 -0.18709,-0.42124 -0.7873,-0.35906 -1.36157,-0.41104 -0.74663,-0.0676 0.99801,-0.74599 2.21904,-0.98102 0.31571,-0.0608 1.72166,-0.23929 3.07061,-0.21759 0,0 1.53666,0.0434 2.40866,0.18601 3.94736,0.69182 5.03508,4.60136 5.46427,5.84899 0.2619,0.76133 0.58366,2.13167 0.2094,4.10551 0.0986,1.46353 3.03231,3.88423 3.37965,4.22377 0.62289,0.60892 0.63846,0.6163 1.13848,0.53989 0.48028,-0.0734 0.52614,-0.0562 0.87167,0.32778 0.2939,0.32657 0.36472,0.49443 0.36472,0.86444 0,0.4175 0.049,0.50013 0.53941,0.91036 0.74252,0.62107 0.99948,1.01912 0.81626,1.26444 -0.10587,0.14174 -0.238,0.16756 -0.55386,0.10826 -0.3723,-0.0699 -0.40862,-0.0557 -0.35422,0.13813 0.18996,0.67703 0.19701,0.73786 0.0855,0.73786 -0.0646,0 -0.39842,-0.28702 -0.74183,-0.63783 -0.34341,-0.3508 -0.6835,-0.64266 -0.75575,-0.64858 -0.0723,-0.006 -0.31923,-0.003 -0.54884,0.007 -0.34937,0.0147 -0.47414,-0.0475 -0.7649,-0.38111 -0.24124,-0.27682 -0.36536,-0.54721 -0.4061,-0.88468 -0.052,-0.43039 -0.13762,-0.5558 -0.74842,-1.09568 -0.37937,-0.33532 -0.83066,-0.7066 -1.00286,-0.82508 -0.1722,-0.11848 -0.40703,-0.30371 -0.52183,-0.41163 -0.35268,-0.33152 -2.04172,-1.26876 -2.28001,-1.26516 -0.26826,0.004 -0.90319,0.61432 -0.90319,0.86811 0,0.19485 1.2391,1.98798 1.87813,3.30337 1.00843,2.07576 2.30681,4.80856 3.75769,11.18541 0.14386,0.6347 2.75744,3.4444 4.17543,4.22455 0.25872,0.14235 0.80788,0.52986 1.22036,0.86115 0.41248,0.33129 0.95944,0.71131 1.18736,0.89227 0.34007,0.27001 0.58498,0.49489 1.04962,0.95599 0.69333,0.68802 0.76062,1.06224 0.4035,1.42137 -0.11481,0.11545 -0.6402,0.55364 -0.97627,0.75084 -0.48113,0.28233 -2.92289,1.75991 -4.1199,2.0902 -0.1911,0.0527 -0.3773,0.12904 -0.41377,0.16957 -0.10508,0.11676 0.4674,0.63922 0.90986,1.16068 0.86514,1.01961 1.66805,2.07649 2.51273,3.11031 0.48792,0.59716 1.06505,1.58119 1.29551,2.13311 0.21465,0.51402 0.4877,1.10745 0.40531,1.43897 -0.0829,0.3335 -0.40223,0.52576 -0.60543,0.68522 -0.2032,0.15946 -1.67872,1.36516 -1.88327,1.48888 -0.27271,0.16493 -2.50729,1.62748 -2.78364,1.75243 -0.82044,0.37099 -1.83026,0.84608 -2.22592,0.95075 -0.17764,0.047 -1.57166,0.49393 -1.84963,0.14466 z"
          style={{ fill: props.fill }}
        />
      </g>
    </svg>
  );
}

const colors = [
  "hsl(0deg 100% 35%)",
  "hsl(30deg 100% 50%)",
  "hsl(60deg 100% 40%)",
  "hsl(90deg 100% 45%)",
  "hsl(120deg 100% 25%)",
];
function getSatisfaction(satisfactions: number[], index: number) {
  if (index <= satisfactions[0]) {
    return 0;
  }
  if (index <= satisfactions[0] + satisfactions[1]) {
    return 1;
  }
  if (index <= satisfactions[0] + satisfactions[1] + satisfactions[2]) {
    return 2;
  }
  if (index <= satisfactions[0] + satisfactions[1] + satisfactions[2] + satisfactions[3]) {
    return 3;
  }
  return 4;
}

function getIcons(data: UserComparisonData) {
  const amountOfIcons = 100;
  return range(amountOfIcons)
    .map((index) => {
      let fill = "transparent";
      const type = index % 2 ? "male" : "female";
      let score = 0;
      if (data.satisfaction) {
        score = getSatisfaction(data.satisfaction[type], index / amountOfIcons);
        fill = colors[score];
      }
      const sortScore = score + (Math.random() - 0.5) * 2;
      return { type, fill, score, sortScore };
    })
    .sort((a, b) => a.sortScore - b.sortScore);
}

export default function SatisfactionAmpelChart() {
  const { user, data } = useContext(AppContext);

  const icons = getIcons(data);
  const className = classNames(styles.ampelContainer, user.satisfaction ? "" : styles.hidden);

  return (
    <div className={className}>
      {icons.map((icon, index) => {
        if (icon.type === "male") {
          return <Ampelmann key={index} fill={icon.fill} />;
        } else {
          return <Ampelfrau key={index} fill={icon.fill} />;
        }
      })}
    </div>
  );
}
