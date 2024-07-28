// ----------Scramble------------
$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3000, 20, "alphabet", true);
  });
  
  // ----------scrambleEnd--------------
  
  var tl = gsap.timeline();
  tl.to(".Loading", {
    opacity: 0,
    delay: 2.5,
  })
    .to(".loader", {
      // y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })
    .to(
      ".loader",
      {
        y: "-100%",
        // opacity:0,
        duration: 1,
        // ease: "Expo.easeInOut"
      },
      "up"
    )
    .to(
      ".svgwaala",
      {
        opacity: 1,
        delay: -1.7,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#dotted",
      {
        opacity: 1,
        delay: -1.8,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#donut",
      {
        opacity: 1,
        scale: 2,
        delay: -1.4,
        ease: "Expo.easeInOut",
        rotationY: "+=15",
        duration: 3,
        rotationX: "+=15",
        rotationZ: "+=15",
      },
      "up"
    )
  
    .from(
      "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
      {
        opacity: 0,
        duration: 1,
        scale: 0,
        top: "40%",
        left: "47%",
      },
      "up"
    );
  
  var tl2 = gsap.timeline();
  
  document.querySelectorAll("#explore").forEach(function (elem) {
    elem.addEventListener("click", function () {
      tl2
        .to(
          "#kothik-k",
          {
            left: "-15%",
            top: "-15%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-o",
          {
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-t",
          {
            left: "115%",
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-h",
          {
            left: "115%",
            top: "110%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-i",
          {
            left: "35%",
            top: "120%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-k2",
          {
            left: "-15%",
            top: "80%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to("#donut", {
          width: "80vw",
          top: "-10%",
          rotate: "360deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
          delay: "-1",
        })
        .to(
          "#dotted",
          {
            opacity: 0,
          },
          "sw"
        )
        .to(".svgwaala", {
          opacity: 0,
        });
    });
  });
  
  function example() {
    window.location.href = "captcha.html";
  }
  
  // video 3 --------------
  
  var tl7 = gsap.timeline();
  tl7.from(
    ".main-abhishek",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  );
  tl7
    .from(
      ".front-page-img",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-3",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-1",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 2,
      },
      "anim1"
    )
    .from(
      "#line-effect-2",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    )
    .from(
      ".img-one",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit",
      {
        width: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit-2",
      {
        height: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".main-txt-front",
      {
        opacity: 0,
        ease: "expo.inout",
        delay: -0.5,
        duration: 1,
      },
      "anim2"
    )
    .from(
      "#circle",
      {
        opacity: 0,
        ease: "expo.inout",
        duration: 2,
      },
      "anim2"
    )
    .from(
      "#nav",
      {
        top: -50,
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    );
  
  document
    .querySelector("#cntr-nav .ri-menu-line")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "0%";
      document.querySelector(".upar-menu .ri-close-fill").style.display =
        "initial";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
    });
  
  document
    .querySelector(".upar-menu .ri-close-fill")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "-100%";
      document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
    });
  
  document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
  });
  document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
  });
  document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
  });
  document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
  });
  
  
  // video 3 ----------------------------
  
  
  function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `https://iili.io/dIk4T6G.jpg
https://iili.io/dIk4AFf.jpg
https://iili.io/dIk4Ra4.jpg
https://iili.io/dIk4IGs.jpg
https://iili.io/dIk4Y92.jpg
https://iili.io/dIk4lt9.jpg
https://iili.io/dIk41ne.jpg
https://iili.io/dIk4EMu.jpg
https://iili.io/dIk4j9V.jpg
https://iili.io/dIk4koF.jpg
https://iili.io/dIk4vMg.jpg
https://iili.io/dIk4Ot1.jpg
https://iili.io/dIk4UKJ.jpg
https://iili.io/dIk4gcv.jpg
https://iili.io/dIk4PAN.jpg
https://iili.io/dIk4iNI.jpg
https://iili.io/dIk4QoX.jpg
https://iili.io/dIk4ZVn.jpg
https://iili.io/dIk4tPs.jpg
https://iili.io/dIk4pS4.jpg
https://iili.io/dIk6JNS.jpg
https://iili.io/dIk63x9.jpg
https://iili.io/dIk6FVe.jpg
https://iili.io/dIk6qKb.jpg
https://iili.io/dIk6xRV.jpg
https://iili.io/dIk6zOB.jpg
https://iili.io/dIk6IDP.jpg
https://iili.io/dIk6AWF.jpg
https://iili.io/dIk6Rig.jpg
https://iili.io/dIDTH79.md.jpg
https://iili.io/dIDTdmu.md.jpg
https://iili.io/dIDTJee.md.jpg
https://iili.io/dIDIm12.md.jpg
https://iili.io/dIDTodP.md.jpg
https://iili.io/dIDT1kX.md.jpg
https://iili.io/dIDTMIs.md.jpg
https://iili.io/dIDTWQf.md.jpg
https://iili.io/dIDTjEl.md.jpg
https://iili.io/dIDT6EQ.md.jpg
https://iili.io/dIDu2aI.md.jpg
https://iili.io/dIDuBZG.md.jpg
https://iili.io/dIDunnf.md.jpg
https://iili.io/dIDulMx.md.jpg
https://iili.io/dIDujta.md.jpg
https://iili.io/dIDuSSI.md.jpg
https://iili.io/dIDurAX.md.jpg
https://iili.io/dIDuLP4.md.jpg
https://iili.io/dIDupR9.md.jpg
https://iili.io/dIDARlp.md.jpg
https://iili.io/dIDAZXa.md.jpg
https://iili.io/dIDRo22.md.jpg
https://iili.io/dIDRRLb.md.jpg
https://iili.io/dIDRgQs.md.jpg
https://iili.io/dIDRQvS.md.jpg
https://iili.io/dID5nna.md.jpg
https://iili.io/dID5oMJ.md.jpg
https://iili.io/dID5R9I.md.jpg
https://iili.io/dID5Ytn.md.jpg
https://iili.io/dID5Gcl.md.jpg
https://iili.io/dID5Nou.md.jpg
https://iili.io/dID5LiJ.md.jpg
https://iili.io/dID5yNt.md.jpg
https://iili.io/dID7Kl4.md.jpg
https://iili.io/dID7zxe.md.jpg
https://iili.io/dID75UQ.md.jpg
https://iili.io/dID7W0v.md.jpg
https://iili.io/dID7Obt.md.jpg
https://iili.io/dID7prx.md.jpg
https://iili.io/dIDYBEJ.md.jpg
https://iili.io/dIDYIpI.md.jpg
https://iili.io/dIDYhCu.md.jpg
https://iili.io/dIDacoF.md.jpg
https://iili.io/dIDO5R1.md.jpg
https://iili.io/dIDapRV.md.jpg
https://iili.io/dIDcK0J.md.jpg
https://iili.io/dIDcEX9.md.jpg
https://iili.io/dIDcvX1.md.jpg
https://iili.io/dIDcQII.md.jpg
https://iili.io/dIDcprG.md.jpg
https://iili.io/dIb2S4a.md.jpg
https://iili.io/dIb2rYv.md.jpg
https://iili.io/dIb24vR.md.jpg
https://iili.io/dIb2g3J.md.jpg
https://iili.io/dIb26pp.md.jpg
https://iili.io/dIb2D4s.md.jpg
https://iili.io/dIb2m3G.md.jpg
https://iili.io/dIb3djS.md.jpg
https://iili.io/dIb3Fn9.md.jpg
https://iili.io/dIb3Caj.md.jpg
https://iili.io/dIb3IwB.md.jpg
https://iili.io/dIb3TZP.md.jpg
https://iili.io/dIb3RMF.md.jpg
https://iili.io/dIb3YFa.md.jpg
https://iili.io/dIb3acJ.md.jpg
https://iili.io/dIb3EwN.md.jpg
https://iili.io/dIb3Vnt.md.jpg
https://iili.io/dIb3jFs.md.jpg
https://iili.io/dIb3wcG.md.jpg
https://iili.io/dIb3NSf.md.jpg
https://iili.io/dIb3e94.md.jpg
https://iili.io/dIb3kAl.md.jpg
https://iili.io/dIb3vN2.md.jpg
https://iili.io/dIb38tS.md.jpg
https://iili.io/dIb3Uo7.md.jpg
https://iili.io/dIb3gV9.md.jpg
https://iili.io/dIb3rPe.md.jpg
https://iili.io/dIb3Pcb.md.jpg
https://iili.io/dIb3iSj.md.jpg
https://iili.io/dIb3QAQ.md.jpg
https://iili.io/dIb3ZNV.md.jpg
https://iili.io/dIb3tDB.md.jpg
https://iili.io/dIbF9Kg.md.jpg
https://iili.io/dIbFKDN.md.jpg
https://iili.io/dIbFuR4.md.jpg
https://iili.io/dIbFlfe.md.jpg
https://iili.io/dIbFM5x.md.jpg
https://iili.io/dIbFWbV.md.jpg
https://iili.io/dIbFsqX.md.jpg
https://iili.io/dIbFtdG.md.jpg
https://iili.io/dIbFmml.md.jpg
https://iili.io/dIbK9XS.md.jpg
https://iili.io/dIbKKdb.md.jpg
https://iili.io/dIbKf7j.md.jpg
https://iili.io/dIbKnIV.md.jpg
https://iili.io/dIbKxLP.md.jpg
https://iili.io/dIbKTEF.md.jpg
https://iili.io/dIbKurg.md.jpg
https://iili.io/dIbKEBt.md.jpg
https://iili.io/dIbKM4n.md.jpg
https://iili.io/dIbxtDb.md.jpg
https://iili.io/dIbxLJ9.md.jpg
https://iili.io/dIbxQRe.md.jpg
https://iili.io/dIbxZOu.md.jpg
https://iili.io/dIbzCsR.md.jpg
https://iili.io/dIbzRbs.md.jpg
https://iili.io/dIbz7zG.md.jpg
https://iili.io/dIbzas4.md.jpg
https://iili.io/dIbz012.md.jpg
https://iili.io/dIbzjXj.md.jpg
https://iili.io/dIbzOqQ.md.jpg
https://iili.io/dIbzkrB.md.jpg
https://iili.io/dIbz8dP.md.jpg
https://iili.io/dIbzmpn.md.jpg
https://iili.io/dIbIHQf.md.jpg
https://iili.io/dIbIdB4.md.jpg
https://iili.io/dIbIK2S.md.jpg
https://iili.io/dIbIxQj.md.jpg
https://iili.io/dIbIICx.md.jpg
https://iili.io/dIbIR3B.md.jpg
https://iili.io/dIbI0ZJ.md.jpg
https://iili.io/dIbIXaI.md.jpg
https://iili.io/dIbIeZG.md.jpg
https://iili.io/dIbIS6l.md.jpg
https://iili.io/dIbI487.md.jpg
https://iili.io/dIbIswu.md.jpg
https://iili.io/dIbIZnj.md.jpg
https://iili.io/dIbID6Q.md.jpg
https://iili.io/dIbImFV.md.jpg
https://iili.io/dIbTJAF.md.jpg
https://iili.io/dIbTfPR.md.jpg
https://iili.io/dIbTBFp.md.jpg
https://iili.io/dIbTx9t.md.jpg
https://iili.io/dIbTINn.md.jpg
https://iili.io/dIbTcSS.md.jpg
https://iili.io/dIbTVob.md.jpg
https://iili.io/dIbTNUB.md.jpg
https://iili.io/dIbTkR1.md.jpg
https://iili.io/dIbT8Dg.md.jpg
https://iili.io/dIbTQRt.md.jpg
https://iili.io/dIbuH0l.md.jpg
https://iili.io/dIbux0Q.md.jpg
https://iili.io/dIbuTdB.md.jpg
https://iili.io/dIbuaLJ.md.jpg
https://iili.io/dIbu1gp.md.jpg
https://iili.io/dIbukrl.md.jpg
https://iili.io/dIbusBj.md.jpg
https://iili.io/dIbVFxR.md.jpg
https://iili.io/dIbVJRa.md.jpg
https://iili.io/dIbM8V2.md.jpg
https://iili.io/dIbMONf.md.jpg
https://iili.io/dIbV2Dv.md.jpg
https://iili.io/dIbVYfS.md.jpg
https://iili.io/dIbVgXR.md.jpg
https://iili.io/dIbVZes.md.jpg
https://iili.io/dIbVtmG.md.jpg
https://iili.io/dIbWJr7.md.jpg
https://iili.io/dIbWKmb.md.jpg
https://iili.io/dIbWRpa.md.jpg
https://iili.io/dIbWWps.md.jpg
https://iili.io/dIbWwQ4.md.jpg
https://iili.io/dIbW4Tb.md.jpg
https://iili.io/dIbWb8F.md.jpg
https://iili.io/dIbXdnR.md.jpg
https://iili.io/dIbXKFI.md.jpg
https://iili.io/dIbXq8X.md.jpg
https://iili.io/dIbXC9n.md.jpg
https://iili.io/dIbXTMl.md.jpg
https://iili.io/dIbXcAu.md.jpg
https://iili.io/dIbXhS1.md.jpg
https://iili.io/dIbX8VR.md.jpg
https://iili.io/dIbXrlI.md.jpg
https://iili.io/dIbXPHX.md.jpg
https://iili.io/dIbXLDG.md.jpg
https://iili.io/dIbXDil.md.jpg
https://iili.io/dIbXplS.md.jpg
https://iili.io/dIbXyU7.md.jpg
https://iili.io/dIbhdOu.md.jpg
https://iili.io/dIbh2Db.md.jpg
https://iili.io/dIbhKWx.md.jpg
https://iili.io/dIbhfiQ.md.jpg
https://iili.io/dIbhC0B.md.jpg
https://iili.io/dIbhnUP.md.jpg
https://iili.io/dIbhxJ1.md.jpg
https://iili.io/dIbhz5F.md.jpg
https://iili.io/dIbhIOg.md.jpg
https://iili.io/dIbhAzJ.md.jpg
https://iili.io/dIbhRWv.md.jpg
https://iili.io/dIbhYfp.md.jpg
https://iili.io/dIbhcgI.md.jpg
https://iili.io/dIbhEen.md.jpg
https://iili.io/dIbhXs4.md.jpg
https://iili.io/dIbhNgS.md.jpg
https://iili.io/dIbhk79.md.jpg
https://iili.io/dIbh8mu.md.jpg
https://iili.io/dIbh6qQ.md.jpg
https://iili.io/dIbhLdP.md.jpg
https://iili.io/dIbhtmg.md.jpg
https://iili.io/dIbj22I.md.jpg
https://iili.io/dIbj37t.md.jpg
https://iili.io/dIbjFkX.md.jpg
https://iili.io/dIbjCQf.md.jpg
https://iili.io/dIbjxEl.md.jpg
https://iili.io/dIbjz42.md.jpg
https://iili.io/dIbjuY7.md.jpg
https://iili.io/dIbj7Tu.md.jpg
https://iili.io/dIbjYhb.md.jpg
https://iili.io/dIbj0EQ.md.jpg
https://iili.io/dIbj83N.md.jpg
https://iili.io/dIbjjja.md.jpg
https://iili.io/dIbjeGR.md.jpg
https://iili.io/dIbjSaI.md.jpg
https://iili.io/dIbjUvt.md.jpg
https://iili.io/dIbj6js.md.jpg
https://iili.io/dIbjPZG.md.jpg
https://iili.io/dIbjsnf.md.jpg
https://iili.io/dIbjtF2.md.jpg
https://iili.io/dIbjp99.md.jpg
https://iili.io/dIbw9wu.md.jpg
https://iili.io/dIbwHZb.md.jpg
https://iili.io/dIbwdnj.md.jpg
https://iili.io/dIbw2Mx.md.jpg
https://iili.io/dIbwC91.md.jpg
https://iili.io/dIbwnAF.md.jpg
https://iili.io/dIbwowg.md.jpg
https://iili.io/dIbwTMv.md.jpg
https://iili.io/dIbwuPR.md.jpg
https://iili.io/dIbwMP4.md.jpg
https://iili.io/dIbwWKl.md.jpg
https://iili.io/dIbwXl2.md.jpg
https://iili.io/dIbwNR9.md.jpg
https://iili.io/dIbwONe.md.jpg
https://iili.io/dIbw8Vj.md.jpg
https://iili.io/dIbwSix.md.jpg
https://iili.io/dIbwgKQ.md.jpg
https://iili.io/dIbwsOF.md.jpg
https://iili.io/dIbwmfR.md.jpg
https://iili.io/dIbNHJI.md.jpg
https://iili.io/dIbNJRt.md.jpg
https://iili.io/dIbNdOX.md.jpg
https://iili.io/dIbNC0l.md.jpg
https://iili.io/dIbNxJS.md.jpg
https://iili.io/dIbNz57.md.jpg
https://iili.io/dIbNAzu.md.jpg
https://iili.io/dIbNYqx.md.jpg
https://iili.io/dIbNcgV.md.jpg
https://iili.io/dIbN0dB.md.jpg
https://iili.io/dIbN15P.md.jpg
https://iili.io/dIbNEe1.md.jpg
https://iili.io/dIbNVzg.md.jpg
https://iili.io/dIbNWXa.md.jpg
https://iili.io/dIbNXLJ.md.jpg
https://iili.io/dIbNw1R.md.jpg
https://iili.io/dIbNNgp.md.jpg
https://iili.io/dIbNUIn.md.jpg
https://iili.io/dIbNrLG.md.jpg
https://iili.io/dIbNP14.md.jpg
https://iili.io/dIbNQ7S.md.jpg
https://iili.io/dIbNZk7.md.jpg
https://iili.io/dIbNtp9.md.jpg
https://iili.io/dIbO9Bj.md.jpg
https://iili.io/dIbOJrQ.md.jpg
https://iili.io/dIbO22V.md.jpg
https://iili.io/dIbO3YB.md.jpg
https://iili.io/dIbOFkP.md.jpg
https://iili.io/dIbOqTF.md.jpg
https://iili.io/dIbOBhg.md.jpg
https://iili.io/dIbsPdF.md.jpg
https://iili.io/dIbs4g1.md.jpg
https://iili.io/dIbsr0P.md.jpg
https://iili.io/dIbssea.md.jpg
https://iili.io/dIbLdes.md.jpg
https://iili.io/dIbLfLl.md.jpg
https://iili.io/dIbLC1S.md.jpg
https://iili.io/dIbLnr7.md.jpg
https://iili.io/dIbL1YF.md.jpg
https://iili.io/dIbLgjf.md.jpg
https://iili.io/dIbLrQ4.md.jpg
https://iili.io/dIbL6Cl.md.jpg
https://iili.io/dIbLmjj.md.jpg
https://iili.io/dIbQ7us.md.jpg
https://iili.io/dIbQatf.md.jpg
https://iili.io/dIbQln4.md.jpg
https://iili.io/dIbQMc7.md.jpg
https://iili.io/dIbQDlI.md.jpg
https://iili.io/dIbQbSt.md.jpg
https://iili.io/dIbZ9Ns.md.jpg
https://iili.io/dIbZdxf.md.jpg
https://iili.io/dIbZqU7.md.jpg
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 303;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0.8,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"bottom 100%",
        // markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  
  dom()
